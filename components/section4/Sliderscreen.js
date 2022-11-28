 import Image from "next/image";



function Sliderscreen(){
       return (
        <div className=" order-last md:order-fast ml-24 ">
            <Image className="inline-block max-w-full h-full slider-image"  src="/slider1.jpeg" width={280} height ={517}/>
        </div>
       )
}

export default  Sliderscreen;