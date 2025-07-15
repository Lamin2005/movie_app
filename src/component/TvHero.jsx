import "../style/MoviesHero.css";
import heroBg from "../assets/netflix_bg.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function TvHero() {

  let [searchTvseries,setSearchTvseries] = useState('');
  let navigate = useNavigate();
  console.log(searchTvseries);
  
  let searchTvserie = (e) => {
      e.preventDefault();
      navigate(`/tvseries/search/${searchTvseries}`);
      setSearchTvseries('');
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
          <input type="text" placeholder="Search TV Series..." value={searchTvseries} onChange={(e)=> setSearchTvseries(e.target.value)}/>
          <button onClick={searchTvserie}>Search</button>
        </div>
      </div>
    </section>
  );
}

export default TvHero;
