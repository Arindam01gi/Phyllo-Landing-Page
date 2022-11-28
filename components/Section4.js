import Slidepara from "./section4/Slidepara";
import Sliderscreen from "./section4/Sliderscreen";


function Section4(){
     
    return (
         <div className="workprocess-backgroud text-center md:pb-24 pb-6   ">
         <div>
             <div>
                <h2 className="md:text-4xl text-3xl font-bold lg:pt-44 pt-28 pb-28">
                Here's how Phyllo works
                </h2>
             </div>

             <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
                <Sliderscreen/>
                <Slidepara />
             </div>
             </div>

         </div>
    )

}
export default Section4;