import { Outlet } from "react-router";
import { Header } from "../../shared/components/header/sections/Header";
import Navbar from "../../shared/components/navbar/sections/Navbar";
import StickyNavbar from "../../shared/components/navbar/sections/StickyNavbar";
import Footer from "../../shared/components/footer/Footer";


const Mainlayout = () => {
    return (
        <>
        <Header />
        <Navbar />
        <StickyNavbar />
        <Outlet />
        <Footer />
        </>
    )
};

export default Mainlayout;
