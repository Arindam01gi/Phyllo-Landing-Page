 import Image from "next/image";



function Sliderscreen(){
       return (
        <div className=" lg:ml-80 ml-24 ">
            <Image className="inline-block h-auto align-middle slider-image"  src="/slider1.jpeg" width={280} height ={517}/>
        </div>
       )
}

export default  Sliderscreen;