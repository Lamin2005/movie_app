import { useParams } from "react-router-dom";
import useHook from "../hook/useHook";
import "../style/Movies.css";

function PopularMovieDetail() {
  let { movieID } = useParams();

  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`;
  let { data } = useHook(url);

  let moviedata = data.find((movie) => movie.id.toString() === movieID);

  if (!moviedata) return <div style={{ color: "white" }}>Loading...</div>;

  let { title, backdrop_path, poster_path, overview } = moviedata;

  return (
    <div className="pmdetail-main">
      <div className="pmdetail-header">
        <img
          className="pmdetail-header-img skeleton"
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt={title}
          loading="lazy"
        />
        <div className="movieData">
          <div className="mdimg">
            <img
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
              loading="lazy"
              className="skeleton"
            />
          </div>
          <div className="mdtext">
            <h1 className="pmdetail-title">{title}</h1>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMovieDetail;
