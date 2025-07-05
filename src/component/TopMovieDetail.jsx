import { useParams } from "react-router-dom";
import useHook from "../hook/useHook";

function TopMovieDetail() {
  let { movieID } = useParams();

  console.log(movieID);

  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en`;
  let { data } = useHook(url);

  let moviedata = data.find((movie)=> movie.id.toString() === movieID);

  console.log(moviedata);
  

  

  return <div style={{ color: "white" }}>TopMovieDetail</div>;
}

export default TopMovieDetail;
