import Client from "./Client";
import Hero from "./HomeHero/Hero";
import Home from "./HomeHero/Home";




function HomeHero(){
    return (
        <div>
        <div className=" block mr-auto ml-auto"> 
        <div className=" home-hero-wrap pl-8 lg:pl-56 lg:pr-56 md:grid  block">
            <Home />
            <Hero />
        </div> 
        </div>

        
        <div className="clients-section-wrapper">
        <div className="text-center mt-12 ">
            <h2 className="text-2xl font-bold">Empowering businesses around the world</h2>
        </div>

            <Client />
        </div>

        </div> 
    )
}

export default HomeHero;