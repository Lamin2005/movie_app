import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";

let ShareLayout = () => {
    return(
        <div className="shareLayout">
            <Nav/>
            <div className="Movie_main">
                <Outlet/>
            </div>
        </div>
    );
}

export default ShareLayout;