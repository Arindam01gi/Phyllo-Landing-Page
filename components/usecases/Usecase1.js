import Image from "next/image";

function Usecase1(){
    return (
        <div className="grid grid-cols-1 lg:gap-x-10 lg:gap-y-10 items-center auto-cols-fr relative">
        <div className=" relative">
      
            <h3 className="text-4xl mt-16 lg:mt-36 lg:ml-28 ml-12 m-4 font-bold ">
              <span className="text-blue-600 ">Identity</span> and Account
              Verification
            </h3>
            <p className="mt-0 text-base lg:ml-28 ml-12 text-left ">
              Instantly verify creator profiles and account ownership while
              providing a seamless onboarding experience
            </p>
          </div>
         
          <div className=" mr-28 relative">
            <Image
              className="w-full ml-12  mr-28 inline-block h-auto align-middle rounded-3xl relative overflow-hidden mt-12 shadow-2xl"
              src="/humanbig.png"
              width={1563}
              height={1170}
            />
          </div>

          </div>
        
          
    )
}

export default Usecase1;