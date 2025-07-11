import "../style/Footer.css";
import footerBg from "../assets/netflix_bg.jpg"; 

function Footer() {
  return (
    <section
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="overlay"></div>
      <div className="fmain">
        <div className="fheader">
          <h1>🎬 MovieApp</h1>
        </div>
        <div className="fitems">
          <div className="fitem">
            <h3>Home</h3>
            <h3>Contact us</h3>
            <h3>Term of service</h3>
            <h3>About us</h3>
          </div>
          <div className="fitem">
            <h3>Live</h3>
            <h3>FAQ</h3>
            <h3>Premium</h3>
            <h3>Privacy policy </h3>
          </div>
          <div className="fitem">
            <h3>You must watch</h3>
            <h3>Recent release</h3>
            <h3>Top TMDB</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
