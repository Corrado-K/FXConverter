export const fetchRates = async () => {
     const response = await fetch('https://api.apilayer.com/exchangerates_data/convert?to=to&from=from&amount=amount')
}


export const getSymbols = async () => {
     const response = fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
}

var myHeaders = new Headers();
myHeaders.append("apikey", "GmMq5z3xMrTp9PFz41kVrn1jdmp5SI6F");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
