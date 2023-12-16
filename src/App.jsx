import React from "react";
import index from './index.css';
import HomeCarousel from "./components/HomeCarousel";
import WhoAreWe from "./components/WhoAreWe";
import OurServices from "./components/OurServices";
import Footer from "./components/Footer";
import OurClients from "./components/OurClients";
import Navbar from "./components/Nav";
import OurAdvisors from "./components/OurAdvisors";


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
