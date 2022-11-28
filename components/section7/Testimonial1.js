import Image from "next/image";

function Testimonial1() {
  return (
    <div className="ml-2 mr-2  ">
    <div className="testimonial-slide w-slide w-full md:w-1/2  ">
      <div>
        <Image src="/tetsimoniallogo1.png" width={112} height={112} />
      </div>
      <p className="text-base mt-12">
      “Phyllo has enabled us to access creator data from a large number of platforms on day 1 rather than going and integrating with each platform; that was not feasible for us and would have taken a lot of time and effort.”
      </p>
      <div className="flex  mt-12">
       <div >
           <Image src="/author1.png" width={112} height={112} />
       </div>
        <div className="block ml-6 mt-6">
          <div>
              <h3 className="text-blue-800 text-md font-bold">Till Musshoff</h3>
          </div>
             <p>
             Cofounder, Control Console
             </p>
        </div>
     </div>

    </div>
    

  </div>
  );
}
export default Testimonial1;
