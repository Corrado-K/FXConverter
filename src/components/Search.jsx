import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import currencyArray, { getSymbols, result } from "../services/demo";



const Search = () => {

     const [currencyFrom, setCurrencyFrom] = useState('');
     const [currencyTo, setCurrencyTo] = useState('');
     const [currencyList, setCurrencyList] = useState([]);
     const [inputData, setInputData] = useState(1);
     const [newValue, setnewValue] = useState(0);
     

   
     
        
     useEffect(() => {
          const options = {
               method: 'GET',
               url: 'https://currency-exchange.p.rapidapi.com/listquotes',
               headers: {
                    'X-RapidAPI-Key': 'be20aa17c0msh09f1059575d68eep11bb2ajsnb614e309f465',
                    'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
               }
          };

          axios.request(options).then(function (response) {
               // console.log(response.data);
               setCurrencyList(response.data);
          }).catch(function (error) {
               console.error(error);
          });
     },[]);
     
     // console.log(currencyList);
     
     

     const handleInput = (event) => {
          setInputData(event.target.value);
          // console.log(event.target.value);
     }
     const handleCurrencyFrom = (event) => {
          setCurrencyFrom(event.target.value);
          console.log(event.target.value);
     }
     const handleCurrencyTo = (event) => {
          setCurrencyTo(event.target.value);
          console.log(event.target.value);
     }

     useEffect(() => {
          const options = {
               method: 'GET',
               url: 'https://currency-exchange.p.rapidapi.com/exchange',
               params: {from: currencyFrom, to: currencyTo, q:1},
               headers: {
                 'X-RapidAPI-Key': 'be20aa17c0msh09f1059575d68eep11bb2ajsnb614e309f465',
                 'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
               }
          };

          console.log(currencyTo);
             
          axios.request(options).then(function (response) {
               // console.log(currencyFrom);
               // console.log(currencyTo);
               console.log(response.data);
               setnewValue(response.data * inputData);
          }).catch(function (error) {
               console.error(error);
          });
     });
     

     return ( 
          <>
               <div>
                    <div className="w-full lg:space-x-5">
                         <select onChange={handleCurrencyFrom} onLoad={handleCurrencyFrom} className='text-[#0c4582] bg-white font-normal border-2 lg:p-5 p-3 w-full lg:w-96 rounded-md border-[#011f3f]'>
                              {currencyList.map((currency, index) => (
                                   <option key={index} className='appearance-none bg-[#021121] text-white font-medium' value={currency}>{currency}</option>
                              ))}   
                         </select>
                    
                         <input className='bg-white text-[#37587c] font-normal border-2 lg:p-5 p-3 w-full lg:w-96 rounded-md border-[#011f3f]' onChange={handleInput} value={inputData} />
                    </div>
               </div>
               <div>
                    <div className="w-full lg:space-x-5">
                         <select onChange={handleCurrencyTo} className='text-[#0c4582] bg-white font-normal border-2 lg:p-5 p-3 w-full lg:w-96 rounded-md border-[#011f3f]'>
                              {currencyList.map((currency,index) => (
                                   <option key={index} className='appearance-none bg-[#021121] text-white font-medium' value={currency}>{currency}</option>
                              ))}
                         </select>
                    
                         <input className='bg-[#d6d6d6] text-[#37587c] font-normal border-2 lg:p-5 p-3 w-full lg:w-96 rounded-md border-[#011f3f]' placeholder="---" value={newValue} disabled/>
                    </div>
               </div>
          </>
      );
}
 
export default Search;