import { useState,useEffect} from "react";

let useHook = (url) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  let getMovies = async () => {
    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");
      let data = await response.json();
      console.log(data.results);
      setData(data.results);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(!url) return;
    getMovies();
  }, [url]);

 return { data, loading, error };

};

export default useHook;
