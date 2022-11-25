import Image from "next/image";
import Button1 from "./buttons/Button1";
import Button2 from "./buttons/Button2";

function Navbar() {
  return (
    <nav className="realtive flex mx-auto lg:p-4  sticky top-0 z-50 bg-white">
      <div className="flex items-center space-between ">
        <div className=" logo pt-1 lg:pt-4 flex flex-shrink-0 lg:ml-56 ml-8 ">
          <Image className="w-11/12 h-auto " src="/logo.svg" width={127} height={31} />
        </div>
        <div className="navbar hidden md:flex space-x-6 ml-6 mt-3">
          <h2>Products</h2>
          <h2>Pricing</h2>
          <h2>Industries</h2>
          <h2>Developers</h2>
          <h2>Comapny</h2>
        </div>
      

        <div className="pt-3 ml-12">
          <div className="flex invisible lg:visible">
            <Button1 />
            <Button2 />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
