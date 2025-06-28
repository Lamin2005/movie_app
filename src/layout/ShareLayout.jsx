import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import { useContext } from "react";
import { OnlineContext } from "../context/OnlineChecking";

let ShareLayout = () => {
  let { online } = useContext(OnlineContext);
  return (
    <div className="shareLayout">
      {!online ? (
        <>
          {" "}
          <h1>Please Turn On InterNet...</h1>
        </>
      ) : (
        <>
          <Nav />
          <div className="Movie_main">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default ShareLayout;
