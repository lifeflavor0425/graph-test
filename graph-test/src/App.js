import { useEffect, useState, useMemo, useCallback, useRef } from "react";
import Graph from "./components/Graph";

function App() {
  const [getData, setgetData] = useState([]);
  const [defaults, setDefaults] = useState([
    { name: "Page A", y: 400, x: 1000, atk: 400 },
    { name: "Page B", y: 300, x: 2000, atk: 600 },
    { name: "Page C", y: 200, x: 3000, atk: 100 },
    { name: "Page D", y: 100, x: 4000, atk: 400 },
    { name: "Page E", y: 200, x: 5000, atk: 600 },
  ])
  
  const requestUrl = useRef(0);
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
        const dataArr = [];
        body.data.map((val, idx) => {
          const data = { name: val.name, idx: idx, atk: val.atk };
          dataArr.push(data);
        })
        setgetData(dataArr);
      });
  };

  const onClick = () => {
    requestFun();
    return ++requestUrl.current;
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
