import "../style/MovieMain.css";
import Popular from "./Popular";
import TrendingMovie from "./TrendingMovie";
import TrendingTV from "./TrendingTV";

function MovieMain() {
  

  return (
    <div className="movie_main">
      <Popular />
      <TrendingMovie />
      <TrendingTV />
    </div>
  );
}

export default MovieMain;
