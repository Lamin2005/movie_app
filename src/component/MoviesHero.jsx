import "../style/MoviesHero.css";
import heroBg from "../assets/netflix_bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function MoviesHero() {

  let [searchMovies,setSearchMovies] = useState('');
  let navigate = useNavigate();

  let searchMovie = (e) => {
      e.preventDefault();
      if(searchMovies === ""){
        return alert("Please Enter a Movie Name.");
      }
      navigate(`/movies/search/${searchMovies}`);
      setSearchMovies('');
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
        <h1>Movies</h1>
        <div className="searchbar">
          <input type="text" placeholder="Search Movies..." value={searchMovies} onChange={(e)=> setSearchMovies(e.target.value)}/>
          <button onClick={searchMovie}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default MoviesHero;
