import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Graph from "./components/Graph";

function App() {
  const [getData, setgetData] = useState([]);
  const requestUrl = useRef(0);
  const limit = 10;
  //const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=0`;
  const url = `http://localhost:8000/get_data`;

  useEffect(() => {
    requestFun();
    console.log("get Change");
  }, []);

  const requestFun = () => {
    fetch(url, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        setgetData(body.data);
      });
    return getData;
  };

  const onClick = () => {
    console.log(requestUrl);
    requestFun();
    return requestUrl.current++;
  };

  return (
    <div className="App">
      <h1>requset count {requestUrl.current}</h1>
      <button onClick={onClick}> request !!</button>
      <Graph props={getData} />
    </div>
  );
}

export default App;
