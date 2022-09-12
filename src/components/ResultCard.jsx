import { CgArrowsExchange } from "react-icons/cg";

const ResultCard = () => {
     return ( 
          <>
               <div className="flex bg-[#E4D6D1] rounded-lg py-3 px-5 md:px-10 md:py-4 justify-between">
                    <div className="flex h-full justify-center content-center">
                         <div className="block md:hidden text-left font-medium text-sm">
                              <h2 className="my-auto text-xl font-semibold">USD</h2>
                              <p>Dollar</p>
                         </div>
                         <div className="md:flex hidden text-left font-medium text-sm space-x-3">
                              <h2 className="my-auto text-xl font-semibold">USD</h2>
                              <div className="md:block">
                                   <p>Dollar</p>
                                   <p>United States of America</p>
                              </div>
                              
                         </div>
                    </div>

                    <div className="my-auto text-2xl flex space-x-2">
                         <div className="">
                              1
                         </div>
                         <CgArrowsExchange className="mt-0.5" />
                         <div className="">
                              3.1
                         </div>
                    </div>
                    

                    <div className="flex h-full justify-center content-center">
                         <div className="block md:hidden font-medium text-sm">
                              <h2 className="my-auto text-xl font-semibold">USD</h2>
                              <p>Dollar</p>
                         </div>
                         <div className="md:flex hidden text-right font-medium text-sm space-x-3">
                              <div className="md:block">
                                   <p>Dollar</p>
                                   <p>United States of America</p>
                              </div>
                              <h2 className="my-auto text-xl font-semibold">USD</h2>

                         </div>
                    </div>

               </div>
          </>
      );
}
 
export default ResultCard;