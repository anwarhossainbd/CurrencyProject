const http = {
   getData(){
     return  fetch('https://free.currconv.com/api/v7/countries?apiKey=1ade7fe643236e7daf5f')
      .then(res=>res.json())
      .then(data=>{
         console.log(data)
         UI.showDataUIOne(data)
         UI.showDataUITwo(data)
      })
      .catch(err=>console.log(err))
   },
}

http.getData()

const UI = {
   
   loadAllSelectors(){
       const slcCountOneElm = document.querySelector('#slcCountOne')
       const slcCountTwoElm = document.querySelector('#slcCountTwo')
       const slcInputOneElm = document.querySelector('#slcInputOne')
       const slcInputTwoElm = document.querySelector('#slcInputTwo')
       return {
         slcCountOneElm,slcCountTwoElm,slcInputOneElm,slcInputTwoElm
       }
   },
   // <option value="1">One</option>
   showDataUIOne(data){
      const {slcCountOneElm} = this.loadAllSelectors()
      const {results}=data
      let option=''
      for (const key of Object.entries(results)) {
        option=document.createElement('option')
        option.setAttribute('value',key[1].currencyId) 
        option.textContent=key[1].currencyName
        slcCountOneElm.append(option)
      }
   },
   showDataUITwo(data){
      const {slcCountTwoElm} = this.loadAllSelectors()
      const {results}=data
      let option=''
      for (const key of Object.entries(results)) {
        option=document.createElement('option')
        option.setAttribute('value',key[1].currencyId) 
        option.textContent=key[1].currencyName
        slcCountTwoElm.append(option)
      }
   }
}



