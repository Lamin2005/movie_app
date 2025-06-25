import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter,Routes,Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
