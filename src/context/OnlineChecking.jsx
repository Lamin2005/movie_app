import { useEffect, useState, createContext } from "react";

export let OnlineContext = createContext();

export function OnlineChecking({children}) {
  let [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    let handleOnline = () => setOnline(true);
    let handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return(
    <OnlineContext.Provider value={{online}}>
        {children}
    </OnlineContext.Provider>
  );
}
