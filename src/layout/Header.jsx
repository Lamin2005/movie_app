import "../style/Header.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

let Header = () => {
  return (
    <section className="header">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          height: "90vh",
        }}
      >
        <SplideSlide>
          <div className="header_main">
            <div className="b_img">
              <img
                src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp"
                alt="bimg"
              />
            </div>
            <div className="header-content">
              <div className="movie_text">
                <h2>Welcome to MovieVerse</h2>
                <h1>Naruto Series</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo cupiditate, sapiente natus deserunt esse quidem
                  repellat assumenda delectus odit maxime saepe ratione.
                  Voluptate consectetur molestiae, architecto nisi eum eos
                  minus.
                </p>
                <div className="buttons">
                  <button className="watchnow">Watch Now</button>
                  <button className="watchtrailer">Watch Trailer</button>
                </div>
              </div>
              <div className="movie_img">
                <img
                  src="https://img.goodfon.com/wallpaper/big/8/1e/naruto-ninja-uzumaki-red-eyes.webp"
                  alt="bimg"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="header_main">
            <div className="b_img">
              <img
                src="  https://wallpapers-clan.com/wp-content/uploads/2025/01/naruto-uzumaki-sunny-day-desktop-wallpaper-cover.jpg"
                alt="bimg"
              />
            </div>
            <div className="header-content">
              <div className="movie_text">
                <h2>Welcome to MovieVerse</h2>
                <h1>Naruto Series</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo cupiditate, sapiente natus deserunt esse quidem
                  repellat assumenda delectus odit maxime saepe ratione.
                  Voluptate consectetur molestiae, architecto nisi eum eos
                  minus.
                </p>
                <div className="buttons">
                  <button className="watchnow">Watch Now</button>
                  <button className="watchtrailer">Watch Trailer</button>
                </div>
              </div>
              <div className="movie_img">
                <img
                  src="  https://wallpapers-clan.com/wp-content/uploads/2025/01/naruto-uzumaki-sunny-day-desktop-wallpaper-cover.jpg"
                  alt="bimg"
                />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Header;
