import "../style/MovieMain.css";
import Popular from "./Popular";
import TrendingMovie from "./TrendingMovie";
import TrendingTV from "./TrendingTV";

function MovieMain() {
  

  return (
    <section className="movie_main">
      <Popular />
      <TrendingMovie />
      <TrendingTV />
    </section>
  );
}

export default MovieMain;
