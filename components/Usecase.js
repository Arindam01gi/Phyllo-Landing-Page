import Image from "next/image";
import Usecase1 from "./usecases/Usecase1";
import Usecase2 from "./usecases/Usecase2";
import UsecasePhoto1 from "./usecases/UsecasePhoto1";

function UseCase() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="pt-28 lg:pt-36 lg:pb-12 ">
          <h1 className="font-bold text-4xl text-center">Use cases</h1>
        </div>
        <div className=" grid lg:mt-56 self-stretch mt-12 auto-cols-fr lg:gap-x-28 lg:gap-y-28 ">
          <div className=" grid grid-cols-1 lg:gap-x-10 lg:gap-y-10 items-center auto-cols-fr flex-row">
            <Usecase1 />
            <UsecasePhoto1 />
          </div>
        </div>

        <Usecase2 />

        <div>
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
        </div>
      </div>
    </div>
  );
}
export default UseCase;
