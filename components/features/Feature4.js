import Image from "next/image";

function Feature4(){
      return(
        <div className=" block">
        <Image className="ml-12" src="/feature2.svg" alt="" width={72} height={72} />
          <p className="text-center py-12  mt-6 flex">
               Reduce the cost of
              <br /> integration by up to 80%
          </p>
        </div>
      );
}

export default Feature4;
