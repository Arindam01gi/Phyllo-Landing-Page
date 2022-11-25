 import Image from "next/image";


function Hero(){
   return (
       <div className="md:grid md:ml-28 ml-16 mr-16 items-center justify-center relative ">
          <Image className="items-center"
          src= "/herophoto.svg"
          width={453}
          height={552}
           />
       </div>
   )
}
export default Hero;