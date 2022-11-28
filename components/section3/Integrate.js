import Image from "next/image";
import Docsbutton from "../buttons/Docsbutton";

function Integrate() {
  return (
    <div>
      <div className="   mt-12  grid grid-cols-1 md:grid-cols-2 container ">
        <div className="block items-center lg:mt-36 ml-2 ">
          <h3 className="font-bold lg:text-3xl text-2xl max-w-3xl">
            Integrate in a <span className="text-blue-800">breeze</span>
          </h3>
          <p className="pt-8 pb-8 text-sm max-w-md">
            Easily integrate Phyllo APIs across iOS, React Native, Android,
            Flutter, and Web with just a few lines of code
          </p>
          <Docsbutton />
        </div>
        <div className="lg:mt-12 mt-6 lg:ml-12 -ml-4  ">
          <Image className="max-w-full h-auto "  src="/Integrate.svg" width={640} height={474} />
        </div>
      </div>
    </div>
  );
}

export default Integrate;
