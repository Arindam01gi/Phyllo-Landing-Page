import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";


function home (){
    return (
        <div className="overflow-hidden">
         
         <Navbar />
         <HomeHero />
        </div>
    )
}

export default home;