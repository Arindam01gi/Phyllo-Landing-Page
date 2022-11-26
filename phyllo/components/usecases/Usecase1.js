import Image from "next/image";

function Usecase1(){
    return (
        <div className="use-case-block">
        <div className=" relative  lg:ml-12 lg:mr-16">
      
            <h3 className="text-4xl mt-16 lg:mt-36 lg:ml-28 ml-14 m-4 font-bold ">
              <span className="text-blue-600 ">Identity</span> and Account
              Verification
            </h3>
            <p className="mt-0 text-base lg:ml-28 ml-14 text-left ">
              Instantly verify creator profiles and account ownership while
              providing a seamless onboarding experience
            </p>
          </div>
         
          <div className=" lg:mt-12  lg:mb-24 lg:mr-24 pr-10 relative items-left">
            <Image
              className="w-4/5 ml-14  mr-24 inline-block h-auto align-middle rounded-3xl relative overflow-hidden mt-12 shadow-2xl"
              src="/humanbig.png"
              width={1563}
              height={1170}
            />
          </div>

          </div>
        
          
    )
}

export default Usecase1;