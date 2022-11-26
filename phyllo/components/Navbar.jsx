import Image from "next/image";
import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";

function Navbar() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2  fixed w-full z-20 top-0 left-0  border-gray-200 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto ">
        <div className=" flex flex-wrap lg:pl-40">
          <div className="flex items-center  lg:pt-5 pt-2">
            <Image className=" lg:h-5 h-6" src="/logo.svg" width={127} height={31} />
          </div>
          <div className=" flex pt-4 ">
            <div className="lg:flex hidden  ">
              <div className="flex ">
                <div className="text-sm pl-4 pt-4 pb-4 pr-2 font-medium">
                  Products
                </div>

                <button className="flex items-center justify-between w-full  font-medium">
                  <Image src="/dropdown.svg" width={11} height={6} />
                </button>
              </div>
              <div className=" ">
                <h3 className="text-sm pl-6 pt-4 pb-4 pr-2 font-medium">
                  Pricing
                </h3>
              </div>
              <div className="flex">
                <h3 className="text-sm  pl-6 pt-4 pb-4 pr-2 font-medium">
                  Industries
                </h3>

                <button className="flex items-center justify-between w-full  font-medium">
                  <Image src="/dropdown.svg" width={11} height={6} />
                </button>
              </div>
              <div className="flex">
                <h3 className="text-sm  pl-6 pt-4 pb-4 pr-2 font-medium">
                  Developers
                </h3>

                <button className="flex items-center justify-between w-full  font-medium">
                  <Image src="/dropdown.svg" width={11} height={6} />
                </button>
              </div>
              <div className="flex">
                <h3 className="text-sm  pl-6 pt-4 pb-4 pr-2 font-medium">
                  Company
                </h3>

                <button className="flex items-center justify-between w-full font-medium">
                  <Image src="/dropdown.svg" width={11} height={6} />
                </button>
              </div>
            </div>
            <div className="">
              <div className=" lg:ml-36 flex invisible lg:visible">
                <Button1 />
                <Button2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
