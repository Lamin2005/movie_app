import "../style/MoviesHero.css";
import heroBg from "../assets/netflix_bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function TvHero() {

  let [searchMovies,setSearchMovies] = useState('');
  let navigate = useNavigate();

  let searchMovie = (e) => {
      e.preventDefault();
      navigate(`/movies/search/${searchMovies}`);
  }

  return (
    <section
      className="mhero"
      style={{
        color: "white",
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="heromain">
        <h1>TV Series</h1>
        <div className="searchbar">
          <input type="text" placeholder="Search Movies..." value={searchMovies} onChange={(e)=> setSearchMovies(e.target.value)}/>
          <button onClick={searchMovie}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default TvHero;
