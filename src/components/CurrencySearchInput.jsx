import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

const CurrencySearchInput = () => {

     // console.log(currencyData);

     return ( 
          <>
               <div className="flex">
                    <select className='bg-transparent text-white font-normal border-2 p-3 w-32 md:w-64 rounded-md border-[#0d5cb1]'>
                         <option className='appearance-none bg-[#021121] text-white font-medium'>USD</option>
                         {/* {data.maps((currency) => (
                              <option className='appearance-none bg-[#021121] text-white font-medium' value={currency}>{String(currency).toUppercase()}</option>
                         ))} */}
                    </select>
               </div>
                    <ArrowsRightLeftIcon className="text-white w-6 h-6" />
               <div className="flex">
                    <select className='bg-transparent text-white font-normal border-2 p-3 w-36 md:w-64 rounded-md border-[#0d5cb1]'>
                         <option className='bg-transparent text-black text-sm font-normal'>USD</option>
                         <option className='bg-transparent text-black text-sm font-normal'>USD</option>
                    </select>                    
               </div>
          </>
      );
}
 
export default CurrencySearchInput;

