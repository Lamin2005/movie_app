import { Outlet, useParams } from "react-router-dom";
import MoviesHero from "../component/MoviesHero";
import MovieList from "../component/MovieList";
import Footer from "../component/Footer";

let Movies = () => {
    let {searchmovie} = useParams();

    return(
        <div className="movies">
            <MoviesHero/>
            {
                !searchmovie && (<MovieList/>)
            }
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default  Movies;