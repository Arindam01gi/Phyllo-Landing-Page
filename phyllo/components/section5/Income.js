import Image from "next/image";

function Income(){
    return (
        <div className="md:ml-6 md:mr-12 ">

           <div className="flex  flex-start">
             <div>
                <Image src='/income.svg' width={30} height={30}  />
             </div>
             <div>
                <h3 className="ml-4 font-bold text-2xl">Income</h3>
             </div>
           </div>
           <div className="pt-8">
            <p>
            Income API gives you the income and transaction-level data from a creator or independent work platform
            </p>
           </div>
            
           <h3 className="text-base font-bold text-blue-800 mt-6 mb-16">
                Know more
            </h3>


        </div>
    )
}

export default Income;