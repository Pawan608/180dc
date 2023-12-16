import React from "react";
import index from '/src/index.css';
import HomeCarousel from "/src/components/HomeCarousel";
import WhoAreWe from "/src/components/WhoAreWe";
import OurServices from "/src/components/OurServices";
import Footer from "/src/components/Footer";
import OurClients from "/src/components/OurClients";
import Navbar from "/src/components/Nav";
import OurAdvisors from "/src/components/OurAdvisors";


function App() {
    const backgroundStyle = {
        backgroundImage: 'url("src/assets/Desktop - 6.png")'
    };

    return (
        <div style={backgroundStyle}>
            <Navbar/>
            <HomeCarousel/>
            <WhoAreWe/>
            <OurServices/>
            <OurClients/>
            <OurAdvisors/>
            <Footer/>
        </div>
    );
}

export default App;
