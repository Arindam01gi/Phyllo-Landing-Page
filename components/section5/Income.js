import Image from "next/image";

function Income(){
    return (
        <div className="md:ml-2 md:mr-2 md:mt-0 -mt-14">

           <div className="flex flex-start">
           <div>
                <Image className="max-h-12" src='/income.svg' width={30} height={30}  />
             </div>
             <div>
                <h3 className="ml-4 font-bold text-xl">Income</h3>
             </div>
           </div>
           <div className="pt-8">
            <p className="text-sm inline-block">
            Income API gives you the income and transaction-level data from a creator or independent work platform
            </p>
           </div>
            
           <h3 className="text-sm font-bold text-blue-800 mt-6 lg:mb-16">
                Know more
            </h3>


        </div>
    )
}

export default Income;