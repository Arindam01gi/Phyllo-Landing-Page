import Image from "next/image";

function Usecase2() {
  return (
      <div className="use-case-block lg:mt-0 lg:ml-16 ml-4 ">
      <div className="md:flex ">
        <div className="m-10  lg:ml-14 ml-2  lg:m-12">
          <div className=" m-8 sm:pr-6">
            <Image
              className="h-auto w-100  rounded-3xl overflow-hidden shadow-2xl"
              src="/overview.svg"
              width={1563}
              height={1170}
            />
          </div>
        </div>
        
      </div>
      <div className="mr-28 ml-12">
          <h3 className="text-4xl  text-left font-bold">
            Analyze <span className="text-blue-600 ">growth trends</span>
          </h3>
          <p className="text-left mt-2 mr-16 ">
            Instantly verify creator profiles and account ownership while
            providing a seamless onboarding experience
          </p>
        </div>
    </div>
    // <div className="use-case-block">
    //   <div className=" md:flex block mt-24">
    //     <div className=" mt-24 ml-24  ">
    //       <Image
    //        className="w-full ml-12  mr-28 inline-block h-auto  w-100 align-middle rounded-3xl relative overflow-hidden mt-12 shadow-2xl "
    //       src="/overview.svg"
    //       width={500}
    //       height={473}
    //       />
    //     </div>
    //     <div className=" text-left ">
    //       <h3 className="lg:text-4xl text-3xl mt-16 lg:mt-36 lg:ml-28 ml-12 m-4 font-bold ">
    //         Analyze <span className="text-blue-600 ">growth trends</span>
    //       </h3>
    //       <p className="text-left ml-16 lg:ml-0 mt-8">
    //         Instantly verify creator profiles and account ownership while
    //         providing a seamless onboarding experience
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Usecase2;
