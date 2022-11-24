import Hero from "./HomeHero/Hero";
import Home from "./HomeHero/Home";




function HomeHero(){
    return (
        <div className=" home-hero-wrap pl-8 lg:pl-64 lg:pr-64 md:grid block">
            <Home />
            <Hero />
        </div> 
    )
}

export default HomeHero;