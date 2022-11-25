import Image from "next/image";
import Usecase1 from "./usecases/Usecase1";
import Usecase2 from "./usecases/Usecase2";
import Usecase3 from "./usecases/Usecase3";


function UseCase() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="pt-28 lg:pt-36 lg:pb-0 ">
          <h1 className="font-bold text-4xl text-center">Use cases</h1>
        </div>
        <div className="use-case-grid mb-12">
            <Usecase1 />
            <Usecase2 />
           <Usecase3 />
          
        </div>
       

        {/* <div>
          <div className="md:flex space-x-2 justify-around lg:ml-12 ml-0 self-stretch">
            <div>
              <h1 className="text-3xl  ml-16  mr-28 lg:mr-0 lg:mt-36 lg:ml-28 font-bold">
                <span className="text-blue-600">Deep dive</span> into engagement
                metrics
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
        </div> */}
      </div>
    </div>
  );
}
export default UseCase;
