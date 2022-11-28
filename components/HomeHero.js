
import Hero from "./HomeHero/Hero";
import Home from "./HomeHero/Home";




function HomeHero(){
    return (
        <div className="pt-28 lg:pl-48 lg:pr-48 pl-12 pr-12">
        <div className="  mr-auto ml-auto  "> 
        <div className="max-w-screen-xl ">
        <div className=" items-center ml-auto mr-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
            <Home />
            <Hero />
        </div> 
        </div> 
       
        </div>

        
       
        </div> 
    )
}

export default HomeHero;