import Image from "next/image";
import Actionbutton from "../buttons/Actionbutton";

function Activate() {
  return (
    <div>
      <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 container">
        <div className=" mt-12 md:order-1 order-2 justify-end items-center max-w-xs max-h-xs">
          <Image className="max-w-full h-auto" src="/herophoto.svg" width={453} height={552} />
        </div>

        <div className="block md:mt-36 lg:pl-16 md:order-2 order-1">
          <h1 className="font-bold lg:text-3xl text-2xl max-w-3xl">
            <span className="text-blue-800">Activate and access</span> verified
            data instantly
          </h1>
          <p className="pt-8 pb-8 text-sm max-w-md h-auto">
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
