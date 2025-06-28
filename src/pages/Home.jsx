import Footer from "../component/Footer";
import Header from "../component/Header";
import MovieMain from "../component/MovieMain";

let Home = () => {
    return(
        <div className="home">
            <Header/>
            <MovieMain/>
            <Footer/>
        </div>
    );
}

export default  Home;