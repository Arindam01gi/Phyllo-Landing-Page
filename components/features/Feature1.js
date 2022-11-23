import Image from "next/image";

function Feature1(){
      return(
        <div className=" block">
        <Image className="ml-16" src="/feature1.svg" alt="" width={72} height={72} />
          <p className="text-center py-12  mt-6 flex">
            Instant access to a creator's
            <br /> profile information
          </p>
        </div>
      );
}

export default Feature1;
