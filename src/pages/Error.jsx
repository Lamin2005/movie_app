import { NavLink } from "react-router-dom";

let Error = () => {
    return(
        <div className="error" style={{color:"white"}}>
            <h1>Error 404</h1>
            <h2>Page not Found</h2>
            <NavLink to="/">Home</NavLink>
        </div>
    );
}

export default Error;