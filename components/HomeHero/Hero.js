 import Image from "next/image";


function Hero(){
   return (
      <div className="   items-center justify-center md:ml-16 sm:ml-12 md:mt-0  mt-4">
      <Image className="items-center max-w-xs max-h-xs  "
      src= "/herophoto.svg"
      width={453}
      height={552}
       />
   </div>

       
   )
}
export default Hero;