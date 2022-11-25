import Button from "./buttons/Button3";
import Feature1 from "./features/Feature1";
import Feature2 from "./features/Feature2";
import Feature3 from "./features/Feature3";
import Feature4 from "./features/Feature4";

function Feature() {
  return (
    <div>
      <div className="background">
        <div className="pt-36">
          <h1 className="font-bold text-4xl text-center">Features</h1>
        </div>

        <div className="p-12 lg:pt-16 lg:pl-28  justify-evenly flex flex-wrap md:flex-shrink-0">
          <Feature1 />
          <Feature2 />
          <Feature3 />
          <Feature4 />
        </div>
        <Button />
      </div>
    </div>
  );
}

export default Feature;
