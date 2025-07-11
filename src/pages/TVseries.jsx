import { Outlet, useParams } from "react-router-dom";
import TvHero from "../component/TvHero";
import TvSeriesList from "../component/TVseriesList";
import Footer from "../component/Footer";

let  TVseries = () => {
    let {searchmovie} = useParams();

    return(
        <div className="movies">
            <TvHero/>
            {
                !searchmovie && (<TvSeriesList/>)
            }
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default  TVseries;

