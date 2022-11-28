import Image from 'next/image'


import Blueknowmore from "./buttons/Blueknowmore";

function Section6() {
  return (
    <div className="section6-background ">
      <div className="text-center lg:pt-36 pt-28 lg:pb-4 pb-8 top-wrapper">
        <h2 className="text-4xl font-bold ">Extensive coverage</h2>
        <div className=" lg:pl-12 lg:pr-8  pl-8 pr-12">
          <p className="md:text-base text-sm pt-4">
            Phyllo provides deep integrations to hundreds of creator platforms.
          </p>
          <p className="md:text-base text-sm pt-1">
            We take care of all the heavy lifting so you can focus on building
            your product.
          </p>
        </div>
        
        <Blueknowmore />
         
      </div>

      <div className='lg:pl-80 lg:pr-80 lg:pb-4 pb-16'>
        <Image src="/section6.png" width={2644} height ={1452} />
      </div>


    </div>
  );
}
export default Section6;
