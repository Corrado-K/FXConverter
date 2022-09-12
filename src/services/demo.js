

export const fetchExchangeRates = async (from, to) => {

     let request =  fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/'+from+'/'+to+'.json')
                         .then(response => response.json())
                         .then((jsonData) => {
                              // jsonData is parsed json object received from url
                              console.log(jsonData)
                         })
                         .catch((error) => {
                              // handle your errors here
                              console.error(error);
                         });

     return request;

}
export const getCurrencies = async () => {

     let request =  fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json')
                         .then(response => response.json())
                         .then((jsonData) => {
                              // jsonData is parsed json object received from url
                              console.log(jsonData)
                         })
                         .catch((error) => {
                              // handle your errors here
                              console.error(error);
                         });

     return request;

}


