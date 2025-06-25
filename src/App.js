import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVseries from "./pages/TVseries";
import Error from "./pages/Error";
import ShareLayout from "./layout/ShareLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tvseries" element={<TVseries />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
