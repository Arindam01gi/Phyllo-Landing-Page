import Image from "next/image";
import Actionbutton from "../buttons/Actionbutton";

function Activate() {
  return (
    <div>
      <div className="integration-wrapper lg:ml-48 lg:mr-48  md:flex-row block mt-12 ml-12 mb-12">
        <div className="mt-12 lg:-ml-14">
          <Image src="/herophoto.svg" width={453} height={552} />
        </div>

        <div className="block items-center lg:mt-36 lg:pr-36 pr-24">
          <h1 className="font-bold text-4xl">
            <span className="text-blue-800">Activate and access</span> verified
            data instantly
          </h1>
          <p className="pt-8 pb-8 text-base">
            Activate any creator’s account, and get access to the creator’s
            identity, engagement, and income data on demand
          </p>
          <Actionbutton />
        </div>
      </div>
    </div>
  );
}
export default Activate;
