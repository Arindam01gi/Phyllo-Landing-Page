import Image from "next/image";

function Feature3(){
      return(
        <div className=" block">
        <Image className="ml-16" src="/feature3.svg" alt="" width={72} height={72} />
          <p className="text-center py-12  mt-6">
            Instant access to a creator's
            <br /> profile information
          </p>
        </div>
      );
}

export default Feature3;
