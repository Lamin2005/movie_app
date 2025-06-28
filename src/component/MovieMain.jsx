import "../style/MovieMain.css";
import useHook from "../hook/useHook";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function MovieMain() {
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en`;
  let { data } = useHook(url);

  const scrollRef = useRef();
useEffect(() => {
  const slider = scrollRef.current;
  let isDown = false;
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    if (
      e.target.tagName === "BUTTON" ||
      e.target.closest("button") ||
      e.target.tagName === "A" ||
      e.target.closest("a")
    ) {
      return;
    }
    isDown = true;
    isDragging = false;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  

  const endDrag = (e) => {
    isDown = false;
    isDragging = false;
    slider.classList.remove("active");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    if (Math.abs(walk) > 5) {
      isDragging = true;
    }
    slider.scrollLeft = scrollLeft - walk;
  };

  // ✅ Add listeners
  slider.addEventListener("mousedown", handleMouseDown);
  slider.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", endDrag);        // ✅ important!
  slider.addEventListener("mouseleave", endDrag);

  return () => {
    slider.removeEventListener("mousedown", handleMouseDown);
    slider.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", endDrag);   // ✅ important!
    slider.removeEventListener("mouseleave", endDrag);
  };
}, []);



  return (
    <div className="movie_main">
      <div className="popular">
        <h2>Popular Movie</h2>
        <div className=" movie-container drag-scroll" ref={scrollRef}>
          {data.map((movie) => {
            return (
              <div className=" movie-box" key={movie.id}>
                <div className="img">
                  <div className="play_icon">
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </div>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt="poster_path"
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
      {/*
      <div className="trendingmovie">
        <h2>Popular Movie</h2>
        <div className="list">
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
        </div>
      </div>

      <div className="trendingtv">
        <h2>Popular Movie</h2>
        <div className="list">
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
          <div className="pmovie">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="mt">
              <p>Hello World</p>
            </div>
          </div>
        </div>
      </div>
                    */}
    </div>
  );
}

export default MovieMain;
