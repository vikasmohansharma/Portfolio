//import Header from "./Header";
import { Outlet } from "react-router-dom";
import  MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout() {
    return <>
        <MainNavigation />
        <Outlet />
        <Footer />
    </>
}

export default Layout;