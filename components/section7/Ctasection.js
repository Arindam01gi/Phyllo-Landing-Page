import PricingButton from "../buttons/PricingButton";
import Signin from "../buttons/Signin";


function Ctasection(){
     
    return(
        <div className="cta-background mt-24 ml-12 mr-16 lg:ml-48 lg:mr-64">
            <div>
                <h2 className="text-3xl font-bold ">
                Ready to get started?
                </h2>

                <p className="mt-4 ">
                Sign up to get API keys or request us for a demo
                </p>
            </div>
            <div className="flex pt-4">
                 <Signin />
                <PricingButton />
                
            </div>
        </div>
    )

}
export default Ctasection;