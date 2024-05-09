import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="font-Raleway">
            <div className="w-full fixed top-0 z-10">
                <Navber />
            </div>
            <div className=" min-h-[calc(100vh-249px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;