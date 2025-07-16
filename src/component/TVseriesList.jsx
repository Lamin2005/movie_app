import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useHook from "../hook/useHook";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

function TvseriesList() {
  
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en`;
  let { data, loading,error } = useHook(url);
  console.log(loading);

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
  
    if (error)
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
        <Loader />
      </div>
    );


  if (data === "")
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
    <div className="movielist">
      <div className="mlist">
        {data.map((movie) => {
          return (
            <div className=" movie-box2" key={movie.id}>
              <div className="img skeleton">
                <div className="play_icon">
                  <a href={`/tvseries/${movie.id}`}>
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
                <p>{movie.original_name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TvseriesList;
