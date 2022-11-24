 import Image from "next/image";


function Hero(){
   return (
       <div className="md:grid  block">
          <Image
          src= "/herophoto.svg"
          width={453}
          height={552}
           />
       </div>
   )
}
export default Hero;