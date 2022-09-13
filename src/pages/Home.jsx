import CurrencySearchInput from "../components/CurrencySearchInput";
import ResultCard from "../components/ResultCard";
// import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
// import { useEffect } from "react";
// import { getConfig } from "@testing-library/react";
// import { getCurrencies } from "../services/demo";


const Home = () => {     

     // fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json')
     // console.log(getCurrencies);

     return ( 
          <>
               <div className="container bg-[#021121] w-screen h-screen">
                    <div className="py-8 md:py-10">
                         <h2 className="text-white text-4xl uppercase font-semibold text-center hover:animate-pulse">FX React</h2>
                    </div>

                    <div className="flex w-full h-12 md:h-16 items-center justify-center space-x-10 md:space-x-16 md:mb-5">
                         <CurrencySearchInput />
                    </div>

                    <div className="block w-full md:w-[65%] mx-auto">
                         <h2 className="text-white text-2xl font-semibold ml-4 mt-8 mb-4 md:ml-[10%]">Results: </h2>

                         {/* Results cards go here */}
                         <div className="md:w-[85%] h-96 mx-auto px-3">
                              <ResultCard />
                         </div>

                    </div>

               </div>
          </>
      );
}
 
export default Home;