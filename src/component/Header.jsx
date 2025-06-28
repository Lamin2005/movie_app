import "../style/Header.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import useHook from "../hook/useHook";
import Loader from "./Loader";

let Header = () => {
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`;
  let { data, loading } = useHook(url);

  return (
    <section className="header">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          height: "91vh",
        }}
      >
        {loading ? (
          <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Loader />
          </div>
        ) : (
          <>
            {data.map((movie) => {
              return (
                <SplideSlide key={movie.id}>
                  <div className="header_main">
                    <div className="b_img">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        alt="backdrop_path"
                      />
                    </div>
                    <div className="header-content">
                      <div className="movie_text">
                        <h2 style={{ color: "crimson" }}>
                          Welcome to MovieVerse
                        </h2>
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        <div className="buttons">
                          <button className="watchnow">
                            <FontAwesomeIcon icon={faPlayCircle} /> Watch Now
                          </button>
                          <button className="watchtrailer">
                            <FontAwesomeIcon
                              icon={faPlayCircle}
                              style={{ marginRight: "4px" }}
                            />
                            Watch Trailer
                          </button>
                        </div>
                      </div>
                      <div className="movie_img">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt="poster_path"
                        />
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              );
            })}
          </>
        )}
      </Splide>
    </section>
  );
};

export default Header;
