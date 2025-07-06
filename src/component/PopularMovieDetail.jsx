import { useParams } from "react-router-dom";
import "../style/Movies.css";
import { useEffect, useState } from "react";
import Loader from "../component/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function PopularMovieDetail() {
  let { movieID } = useParams();
  let [movie, setMovie] = useState([]);
  let [loading, setLoading] = useState(true);

  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}&language=en`;

  useEffect(() => {
    let getMovieData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        if (!data) {
          console.log("NO DATA");
          return;
        }
        console.log(data);
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log("ERROR", error);
        setLoading(false);
      }
    };
    getMovieData();
  }, [movieID,url]);

  let convertohourandmin = (runtime) => {
    let hour = Math.floor(runtime / 60);
    let min = runtime % 60;
    return `${hour}h ${min}m`;
  };

  if (loading)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );

  return (
    <div className="pmdetail-main">
      <div className="pmdetail-header">
        <img
          className="pmdetail-header-img skeleton"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          loading="lazy"
        />
        <div className="movieData">
          <div className="mdimg">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
              className="skeleton"
            />
          </div>
          <div className="mdtext">
            <h1 className="pmdetail-title">{movie.title}</h1>
            <div className="mgenre">
              {movie.genres &&
                movie.genres.map((g) => {
                  return <p key={g.id}>{g.name}</p>;
                })}
            </div>
            <p>{movie.overview}</p>
            <div className="mdtime">
              <p>Time : {convertohourandmin(movie.runtime)}</p>
              <p>Release Date : {movie.release_date} </p>
            </div>
            <div className="mdbutton">
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FontAwesomeIcon className="icon" icon={faPlayCircle} />
                  <span>Watch Now</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularMovieDetail;
