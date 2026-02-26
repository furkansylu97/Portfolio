import { Outlet } from "react-router";
import { Header } from "../../shared/components/header/sections/Header";
import Navbar from "../../shared/components/navbar/sections/Navbar";
import StickyNavbar from "../../shared/components/navbar/sections/StickyNavbar";


const Mainlayout = () => {
    return (
        <>
        <Header />
        <Navbar />
        <StickyNavbar />
        <Outlet />
        </>
    )
};

export default Mainlayout;
