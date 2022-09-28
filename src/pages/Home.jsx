import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import Search from "../components/Search";



const Home = () => {     


     return ( 
          <>
               <div className="bg-[#10181D] w-screen h-screen">
                    <div>
                         <h2 className="text-white shadow-md py-5 shadow-black lg:text-4xl text-2xl uppercase font-semibold lg:pl-20 text-center lg:text-left hover:animate-pulse">KT XCHANGE</h2>
                    </div>

                    <div className="block text-white lg:pl-20 lg:py-12 pl-5 py-5 space-y-3">
                         <h2 className="text-sm font-light uppercase ">KT Currency Converter</h2>
                         <h3 className="text-2xl font-semibold">US Dollar to Euro</h3>
                    </div>

                    <div className="px-5 h-12 md:h-16 items-center justify-center space-y-4 md:mb-5 lg:bg-[#131D27] lg:py-5 lg:h-auto lg:w-fit lg:ml-20">
                         <Search />
                         <div className="lg:py-5 flex">
                              <button className="text-white bg-[#2e3a46] p-2 mx-auto rounded-md flex items-center text-xs">Convert <ArrowsRightLeftIcon className="w-5 ml-2"/> </button>
              
                         </div>
                         <div className="hidden lg:block pt-10">
                              <p className="text-sm italic text-white text-center">KT Xchange’s currency converter uses the ... api in the calculation of the rates.</p>
                         </div>
                    </div>

                    {/* <div className="block w-full md:w-[65%] mx-auto">
                         <h2 className="text-white text-2xl font-semibold mt-8 mb-4 md:ml-[10%]">Results: </h2>

                         <div className="md:w-[85%] h-96 mx-auto">
                         </div>

                    </div> */}

               </div>
          </>
      );
}
 
export default Home;