import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import { useContext } from "react";
import { OnlineContext } from "../context/OnlineChecking";
import useHook from "../hook/useHook";
import Loader from "../component/Loader";

let ShareLayout = () => {
  let { online } = useContext(OnlineContext);
  let API_KEY = "2387d20a0668a260eba20fd50fb57bb8";
  let url = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en`;
  let { loading } = useHook(url);

  return (
    <div className="shareLayout">
      {!online ? (
        <>
          <h1 style={{ color: "white" }}>Please Turn On InterNet...</h1>
        </>
      ) : (
        <>
          {loading ? (
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
          ) : (
            <>
              <Nav />
              <div className="Movie_main">
                <Outlet />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ShareLayout;
