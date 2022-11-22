import Image from "next/image";

function UseCase() {
  return (
    <div>
      <div className="">
        <div className="pt-28 lg:pt-36 lg:pb-24 ">
          <h1 className="font-bold text-4xl text-center">Use cases</h1>
        </div>
        <div className="md:flex block space-x-2 justify-around lg:ml-12 ml-0">
          <div>
            <h1 className="text-3xl mt-16 lg:mt-36 lg:ml-28 ml-12 font-bold">
              <span className="text-blue-600 ">Identity</span> and Account
              Verification
            </h1>
            <p className="mt-6  lg:ml-28 ml-12 text-left">
              Instantly verify creator profiles and account ownership while
              providing a seamless onboarding experience
            </p>
          </div>
          <div className="ml-28">
            <div className="rounded-3xl overflow-hidden shadow-2xl m-8 md:ml-56 md:mb-48 md:mr-56">
              <Image
                className="w-full pb-4 "
                src="/humanbig.png"
                width={1563}
                height={1170}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="md:flex space-x-2 justify-around mr-8 lg:mr-56 mb-16">
            <div className="ml-12 lg:ml-16">
              <div className="rounded-3xl overflow-hidden shadow-2xl mt-96 ml-4 mr-2  lg:mt-0  lg:ml-16 lg:mr-56">
                <Image
                  className="h-100 w-100 "
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
        <div>
          <div className="md:flex space-x-2 justify-around lg:ml-12 ml-0">
            <div >
              <h1 className="text-3xl  ml-16  mr-28 lg:mr-0 lg:mt-36 lg:ml-28 font-bold">
                <span className="text-blue-600">Deep dive</span> into
                engagement metrics
              </h1>
              <p className="ml-16 lg:ml-28 mt-4 text-left">
                Get data about audience demographics such as age, gender or
                country of a creator's account
              </p>
            </div>
            <div className="mt-12  lg:ml-56">
              <div className="rounded-3xl overflow-hidden shadow-2xl ml-16 mr-16 mb-12 lg:ml-80 lg:mb-48 lg:mr-36">
                <Image
                  className="h-85 w-85"
                  src="/metrics.svg"
                  width={1563}
                  height={1170}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UseCase;
