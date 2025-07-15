import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVseries from "./pages/TVseries";
import Error from "./pages/Error";
import ShareLayout from "./layout/ShareLayout";
import { OnlineChecking } from "./context/OnlineChecking";
import MovieDetail from "./component/MovieDetail";
import TvSeriesDetail from "./component/TvSeriesDetail";
import SearchMovie from "./component/SearchMovie";
import SearchTVSeries from "./component/SearchTVSeries";

function App() {
  return (
    <OnlineChecking>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<ShareLayout />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />}>
                <Route path="search/:searchmovie" element={<SearchMovie />} />
              </Route>
              <Route path="/movies/:movieID" element={<MovieDetail />} />
              <Route path="/tvseries/:tvID" element={<TvSeriesDetail />} />
              <Route path="/tvseries" element={<TVseries />} >
                 <Route path="search/:searchTvseries" element={<SearchTVSeries/>} />
              </Route>

              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </OnlineChecking>
  );
}

export default App;
