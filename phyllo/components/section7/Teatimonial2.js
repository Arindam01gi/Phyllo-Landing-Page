import Image from "next/image";

function Testimonial2() {
  return (
    <div className="ml-2 mr-2  ">
      <div className="testimonial-slide w-slide  ">
        <div>
          <Image src="/testimoniallogo2.png" width={112} height={112} />
        </div>
        <p className="text-base mt-12">
        "Phyllo helped us build faster and easier by abstracting away the various social media platform developer APIs. Phyllo powers our social analytics features allowing us to focus on product instead of infrastructure. They are constantly adding new functionality which enables us to drive more value to our end users"
        </p>
        <div className="flex  mt-12">
         <div >
             <Image src="/author2.png" width={112} height={112} />
         </div>
          <div className="block ml-6 mt-6">
            <div>
                <h3 className="text-blue-800 text-md font-bold">Neal Jean</h3>
            </div>
               <p>
               Cofounder, Beacons
               </p>
          </div>
       </div>

      </div>
      

    </div>
  );
}
export default Testimonial2;
