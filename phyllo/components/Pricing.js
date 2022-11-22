import ContactButton from "./ContactButton";
import PricingButton from "./PricingButton";


function Pricing() {
  return (
    <div>
      <div className="pricing-background pt-16 ">
        <div>
          <h1 className="text-center text-3xl font-bold ">
            Ready to get started?
          </h1>
          <p className="text-center mt-4">
          Sign up to request API keys or ask us for a demo
          </p>
        </div >
        <div className="  pt-12  pb-16 flex justify-center">
        <div className="text-center ">
        <ContactButton />
        </div>
        <div>
        <PricingButton />
        </div>
        </div>
         
      </div>
    </div>
  );
}

export default Pricing;
