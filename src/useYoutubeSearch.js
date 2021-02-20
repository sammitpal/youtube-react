import { useState, useEffect } from "react";

function useYoutube(term) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD9dYcLSrF6wTlqOiIUKSAUGwFkt9cZBLk&type=video&maxResults=10&order=relevance&videoEmbeddable=any&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);
  return { data };
}
export default useYoutube;
