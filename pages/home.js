import Section3 from "../components/Section3";
import HomeHero from "../components/HomeHero";
import Navbar from "../components/Navbar";
import Speciality from "../components/Speciality";
import Footer from "../components/Footer"
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/section7";
import Clientsection from "../components/Clientsection";


function home (){
    return (
        <div className="overflow-hidden wrapper">
         
         <Navbar />
         <HomeHero />
         <Clientsection />
         <Speciality/>
         <Section3 />
         <Section4 />
         <Section5 />
         <Section6 />
         <Section7 />
        <Footer />
        </div>
    )
}

export default home;