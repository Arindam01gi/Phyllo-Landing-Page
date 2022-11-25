import Slidepara from "./section4/Slidepara";
import Sliderscreen from "./section4/Sliderscreen";


function Section4(){
     
    return (
         <div className="workprocess-backgroud text-center pb-28 sm:grid block self-stretch">
             <div>
                <h2 className="text-4xl font-bold lg:pt-44 pt-28 pb-28">
                Here's how Phyllo works
                </h2>
             </div>

             <div className="slider-contentwrap md:flex grid">
                <Sliderscreen/>
                <Slidepara />
             </div>


         </div>
    )

}
export default Section4;