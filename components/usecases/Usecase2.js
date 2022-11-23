import Image from 'next/image'

function Usecase2(){
   return(
    <div className="">
    <div className="md:flex space-x-2 justify-around mr-8 lg:mr-56 mb-16 self-stretch">
      <div className="ml-12 lg:ml-16">
        <div className="rounded-3xl overflow-hidden shadow-2xl mt-96 ml-4 mr-2  lg:mt-0  lg:ml-16 lg:mr-56">
          <Image
            className="h-auto w-100 "
            src="/overview.svg"
            width={1563}
            height={1170}
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl mt-28 ml-16 lg:ml-0 text-left font-bold">
          Analyze <span className="text-blue-600 ">growth trends</span>
        </h1>
        <p className="text-left ml-16 lg:ml-0 mt-8">
          Instantly verify creator profiles and account ownership while
          providing a seamless onboarding experience
        </p>
      </div>
    </div>
  </div>
   )
}


export default Usecase2