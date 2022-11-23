import Image from "next/image";


function Feature2(){
     return (
        <div className=" block">
        <Image className="ml-12" src="/feature4.svg" alt="" width={72} height={72} />
          <p className="text-center py-12  mt-6">
              Access to a wide variety
              <br /> profile information
          </p>
        </div>
     )
}

export default Feature2;