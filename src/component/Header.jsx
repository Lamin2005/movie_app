import "../style/Header.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import useHook from "../hook/useHook";

let Header = () => {
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`;
  let { data } = useHook(url);

  return (
    <section className="header">
      {data.length > 0 && (
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            perpage: 1,
            pauseOnHover: true,
            heightRatio: 0.44,
            breakpoints: {
              1024: {
                heightRatio: 0.4,
              },
              768: {
                heightRatio: 0.6,
              },
              480: {
                heightRatio: 0.9,
              },
            },
          }}
        >
          {data.map((movie) => (
            <SplideSlide key={movie.id}>
              <div className="header_main">
                <div className="b_img">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                    loading="eager"
                  />
                </div>
                <div className="header-content">
                  <div className="movie_text">
                    <h2 style={{ color: "crimson" }}>Welcome to MovieVerse</h2>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <div className="buttons">
                      <a href={`/movies/${movie.id}`} className="watchlink">
                        <button className="watchnow">
                          <FontAwesomeIcon icon={faPlayCircle} /> Watch Now
                        </button>
                      </a>
                      <a href={`/movies/${movie.id}`} className="watchlink">
                        <button className="watchtrailer">
                          <FontAwesomeIcon
                            icon={faPlayCircle}
                            style={{ marginRight: "4px" }}
                          />
                          Watch Trailer
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="movie_img">
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
};

export default Header;
