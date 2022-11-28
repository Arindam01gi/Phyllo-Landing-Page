import Activate from "./section3/Activate";
import Integrate from "./section3/Integrate";
import Normalize from "./section3/Normalize";


function Section3(){
     
    return (
        <div className="pt-28 lg:pl-48 lg:pr-48 pl-12 pr-12 md:pb-24">

          <div className="text-center max-w-5xl ">
          <h2 className="lg:text-4xl text-3xl font-bold max-w-3xl lg:ml-28">
            APIs that power the creator economy
            </h2>
          </div>
          <Integrate />
          <Activate />
          <Normalize />
        </div>
    )
}

export default Section3;