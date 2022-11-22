import Image from "next/image";
import Button from "./Button3";

function Feature() {
  return (
    <div>
      <div className="background">
        <div className="pt-36">
          <h1 className="font-bold text-4xl text-center">Features</h1>
        </div>

        <div className="p-12 lg:pt-16 lg:pl-28  justify-evenly flex flex-wrap md:flex-shrink-0">
          <div className=" block">
          <Image className="ml-16" src="/feature1.svg" alt="" width={72} height={72} />
            <p className="text-center py-12  mt-6">
              Instant access to a creator's
              <br /> profile information
            </p>
          </div>

          <div className="ml-8  pl-4 block ">
            <Image className="ml-12" src="/feature4.svg" alt="" width={72} height={72} />
            <p className="text-center py-12   mt-6">
              Access to a wide variety
              <br /> profile information
            </p>
          </div>
          <div className="ml-6 mr-6 block  items-center center">
            <Image className="ml-12" src="/feature3.svg" alt="" width={72} height={72} />
            <p className="text-center  py-12 mt-6">
               Regular updates to the
              <br /> profile information
            </p>
          </div>
          <div className="ml-8 mr-8 block ">
            <Image className="ml-16" src="/feature2.svg" alt="" width={72} height={72} />
            <p className="text-center px-0 py-12 mt-6">
               Reduce the cost of
              <br /> integration by up to 80%
            </p>
          </div>
        </div>
        <Button />
      </div>
      
    </div>
  );
}

export default Feature;
