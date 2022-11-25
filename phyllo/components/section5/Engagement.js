import Image from "next/image";


function Engagement(){
    return (
        <div className="md:ml-6 md:mr-12 ">

           <div className="flex flex-start">
             <div>
                <Image src='/engagement.svg' width={30} height={30}  />
             </div>
             <div>
                <h3 className="ml-4 font-bold text-2xl">Identity</h3>
             </div>
           </div>
           <div className="pt-8">
            <p>
            Identity API verifies a creator's identity and returns unique information such as name, email id, etc. depending upon the source platform
            </p>
           </div>
            
            <h3 className="text-base font-bold text-blue-800 mt-6 mb-16">
                Know more
            </h3>


        </div>
    )
}

export default Engagement;