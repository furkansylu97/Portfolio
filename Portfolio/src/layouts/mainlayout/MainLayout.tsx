import { Outlet } from "react-router";
import { Header } from "../../shared/components/header/sections/Header";


const Mainlayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        </>
    )
};

export default Mainlayout;
