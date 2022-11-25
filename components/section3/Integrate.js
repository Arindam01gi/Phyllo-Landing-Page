import Image from "next/image";
import Docsbutton from "../buttons/Docsbutton";

function Integrate() {
  return (
    <div>
      <div className="integration-wrapper lg:ml-48 lg:mr-48  md:flex-row block mt-12 ml-12 ">
        <div className="block items-center lg:mt-36 lg:pr-36 pr-12">
          <h1 className="font-bold text-4xl">
            Integrate in a <span className="text-blue-800">breeze</span>
          </h1>
          <p className="pt-8 pb-8 text-base">
            Easily integrate Phyllo APIs across iOS, React Native, Android,
            Flutter, and Web with just a few lines of code
          </p>
          <Docsbutton />
        </div>
        <div className="mt-12 lg:-ml-14">
          <Image src="/Integrate.svg" width={640} height={474} />
        </div>
      </div>
    </div>
  );
}

export default Integrate;
