import Activate from "./section3/Activate";
import Integrate from "./section3/Integrate";
import Normalize from "./section3/Normalize";


function Section3(){
     
    return (
        <div className="lg:pt-56 pt-24 pb-24">

          <div className="text-center">
          <h2 className="lg:text-4xl text-3xl font-bold">
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