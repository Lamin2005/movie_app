import { Outlet, useParams } from "react-router-dom";
import TvHero from "../component/TvHero";
import TvSeriesList from "../component/TVseriesList";
import Footer from "../component/Footer";

let  TVseries = () => {
    let {searchTvseries} = useParams();

    return(
        <div className="movies">
            <TvHero/>
            {
                !searchTvseries && (<TvSeriesList/>)
            }
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default  TVseries;

