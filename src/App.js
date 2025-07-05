import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVseries from "./pages/TVseries";
import Error from "./pages/Error";
import ShareLayout from "./layout/ShareLayout";
import { OnlineChecking } from "./context/OnlineChecking";
import PopularMovieDetail from "./component/PopularMovieDetail";
import TopMovieDetail from "./component/TopMovieDetail";

function App() {
  return (
    <OnlineChecking>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<ShareLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieID" element={<PopularMovieDetail />} />
               <Route path="/movies/:movieID" element={<TopMovieDetail/>}/>
              <Route path="/tvseries" element={<TVseries />} />      
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </OnlineChecking>
  );
}

export default App;
