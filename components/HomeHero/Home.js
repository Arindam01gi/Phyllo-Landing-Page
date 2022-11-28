import Button from "../buttons/Button2";
import Button2 from "../buttons/Button1";
import Freedemo from "../buttons/Freedemo";

function Home() {
  return (
    <div className=" flex lg:mt-0 mt-6  ">
      <div className="">
        <div className=" lg:pt-36 md:text-left text-center ">
          <h1 className="font-black  md:text-4xl text-3xl mb-5 max-w-md max-h-28">
            The universal API for creator data
          </h1>
        </div>
        <div className=" md:text-left text-center">
          <p className="text-sm md:my-10 my-0 -pr-2 max-w-md">
            Get continuous access to verified, creator-permissioned data across
            hundreds of platforms
          </p>
          <div className="invisible lg:visible">
            <Freedemo />
          </div>
          <div className="visible lg:invisible flex lg:mt-0 -mt-12   items-center justify-center ">
            <div>
              <Button2 />
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
