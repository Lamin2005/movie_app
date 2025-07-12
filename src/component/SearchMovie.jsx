import { useParams } from "react-router-dom";
import useHook from "../hook/useHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

function SearchMovie() {
  let { searchmovie } = useParams();
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchmovie}`;

  let { data, loading } = useHook(url);

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

  if (data == "")
    return (
      <div
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ textAlign: "center", color: "white" }}>No Result Found</h1>
      </div>
    );

  return (
    <div className="searchmovielist" style={{ color: "white" }}>
      <div className="searchlist">
        <h2>SearchMovie : {searchmovie}</h2>
        <div className="list">
          {data.map((movie) => {
            return (
              <div className=" movie-box2" key={movie.id}>
                <div className="img skeleton">
                  <div className="play_icon">
                    <a href={`/movies/${movie.id}`}>
                      <FontAwesomeIcon icon={faPlayCircle} />
                    </a>
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                  />
                </div>
                <div className="movie-title">
                  <p>{movie.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
