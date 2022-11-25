import Image from "next/image";

function Identity(){
    return (
        <div className="md:ml-6 md:mr-12 ">

           <div className="flex  flex-start">
             <div>
                <Image src='/identity.svg' width={30} height={30}  />
             </div>
             <div>
                <h3 className="ml-4 font-bold text-2xl">Engagement</h3>
             </div>
           </div>
           <div className="pt-8">
            <p className="">
            Engagement API provides data about a creator’s content and their reputation from the source platform like subscribers, followers, comments,etc.
            </p>
           </div>
           <h3 className="text-base font-bold text-blue-800 mt-6 mb-16">
                Know more
            </h3>


        </div>
    )
}

export default Identity;