import Image from "next/image";
import Button1 from "../pages/Button1";
import Button2 from "../pages/Button2";

function Navbar() {
  return (
    <nav className="realtive  mx-auto p-6 sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className=" logo pt-1 lg:pt-4 flex flex-shrink-0 lg:ml-56 ">
          <Image src="/logo.svg" width={110} height={77} />
        </div>
        <div className="navbar hidden md:flex space-x-6 ml-6 mt-3">
          <h2>Products</h2>
          <h2>Pricing</h2>
          <h2>Industries</h2>
          <h2>Developers</h2>
          <h2>Comapny</h2>
        </div>
        {/* Mobile Menu */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute  flex-col items-center self-end hidden  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <h2>Products</h2>
            <h2>Pricing</h2>
            <h2>Industries</h2>
            <h2>Developers</h2>
            <h2>Comapny</h2>
          </div>
        </div>

        <div className="pt-3">
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
