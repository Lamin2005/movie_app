import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

function SearchTVSeries() {
  let { searchTvseries } = useParams();
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "2387d20a0668a260eba20fd50fb57bb8";

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchTvseries}&page=${page}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error: ", err);
        setLoading(false);
      });
  }, [searchTvseries, page]);

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

  if (!data || data.results.length === 0) {
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
  }

  return (
    <div className="searchmovielist" style={{ color: "white" }}>
      <div className="searchlist">
        <h2>SearchTVSeries : {searchTvseries}</h2>
        <div className="list">
          {data.results.map((movie) => {
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

        <div className="pagination">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            Page {page} / {data.total_pages}
          </span>
          <button
            onClick={() =>
              setPage((prev) => (prev < data.total_pages ? prev + 1 : prev))
            }
            disabled={page === data.total_pages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTVSeries;
