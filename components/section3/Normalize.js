import Image from "next/image";
import Normalizebutton from "../buttons/Normalizebutton";

function Normalize() {
  return (
    <div>
      <div className=" mt-12  grid grid-cols-1 md:grid-cols-2 container ">
        <div className="block items-center lg:mt-36 -ml-2">
          <h1 className="font-bold lg:text-3xl text-2xl max-w-3xl">
            <span className="text-blue-800">Normalized data </span><br/>through a
            single API
          </h1>
          <p className="pt-8 pb-8 lg:text-base text-sm max-w-md">
            We ♥ clean code. Phyllo provides access to normalized data from
            hundreds of sources through a single API
          </p>

          <Normalizebutton />
        </div>
        <div className="lg:mt-12 mt-6 lg:ml-12 ml-2 ">
          <Image className="max-w-full " src="/normalizepicture.png" width={640} height={474} />
        </div>
      </div>
    </div>
  );
}

export default Normalize;
