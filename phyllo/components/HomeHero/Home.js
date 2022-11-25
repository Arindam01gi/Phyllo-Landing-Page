import Button from "../buttons/Button2";
import Button2 from "../buttons/Button1";
import Freedemo from "../buttons/Freedemo";

function Home() {
  return (
    <div className="row-span-1 col-span-1 items-center  md:text-left text-center grid lg:mt-0 mt-6 ">
      <div className="md:ml-0 ml-12">
        <h1 className="font-bold md:text-5xl text-4xl mb-5 ">
          The universal API for creator data
        </h1>

        <p className="text-base my-10 pr-12">
          Get continuous access to verified, creator-permissioned data across
          hundreds of platforms
        </p>
        <div className="invisible lg:visible">
          <Freedemo />
        </div>
        <div className="visible lg:invisible flex  md:ml-8 md:mr-8 mr-4">
          <Button2 />
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Home;
