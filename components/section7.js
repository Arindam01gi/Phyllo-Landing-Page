import Image from "next/image";
import Ctasection from "./section7/Ctasection";
import Testimonial2 from "./section7/Teatimonial2";
import Testimonial1 from "./section7/Testimonial1";

function Section7() {
  return (
    <div className="section7-background pt-28 pb-12">
      <div className="flex ">
        <div className="lg:ml-48 ml-12 mb-16 mt-2">
          <h2 className="font-bold text-4xl">Customer testimonials</h2>
        </div>
        <div className="flex lg:pl-96 ">
          <div className="left-arrow mr-6">
            <Image src="/leftarrow.svg" width={56} height={56} />
          </div>
          <div className="right-arrow">
            <Image src="/rightarrow.svg" width={56} height={56} />
          </div>
        </div>
      </div>
     <div className="  block w-slide-mask ml-12 mr-12 lg:ml-48 lg:mr-64">
     <Testimonial1 />
     <div className="md:visible invisible">
     <Testimonial2 />
     </div>

     
    
     </div>
     <Ctasection />


    </div>
  );
}

export default Section7;
