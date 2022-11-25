import Image from "next/image";

function Usecase3() {
  return (
    <div className="use-case-block">
      <div className=" relative ml-4 mr-4 md:ml-8">
        <h3 className="text-4xl mt-16 lg:mt-36 lg:ml-28 ml-12 m-4 font-bold ">
          <span className="text-blue-600 ">Deep dive</span> into engagement
          metrics
        </h3>
        <p className="mt-0 text-base lg:ml-28 ml-12 pr-28 text-left ">
        Get data about audience demographics such as age, gender or country of a creator's account
        </p>
      </div>

      <div className="lg:mr-28 lg:m-0 m-0 ">
        <Image
          className="w-4/5 ml-14  mr-28 mt-0 inline-block h-auto  w-100 align-middle rounded-3xl relative overflow-hidden  shadow-2xl "
          src="/metrics.svg"
          width={500}
          height={473}
        />
      </div>
    </div>
  );
}

export default Usecase3;
