import Image from "next/image";
import Normalizebutton from "../buttons/Normalizebutton";

function Normalize() {
  return (
    <div>
      <div className="integration-wrapper lg:ml-48 lg:mr-48  md:flex-row block mt-12 ml-12 ">
        <div className="block items-center lg:mt-36 lg:pr-36 pr-16">
          <h1 className="font-bold lg:text-4xl text-3xl">
            <span className="text-blue-800">Normalized data </span>through a
            single API
          </h1>
          <p className="pt-8 pb-8 text-base">
            We ♥ clean code. Phyllo provides access to normalized data from
            hundreds of sources through a single API
          </p>

          <Normalizebutton />
        </div>
        <div className="mt-12 lg:-ml-14">
          <Image src="/normalizepicture.png" width={2000} height={1592} />
        </div>
      </div>
    </div>
  );
}

export default Normalize;
