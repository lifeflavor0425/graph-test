import React, {
    memo,
    useEffect,
  } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";
const Rechart = memo(({props}) => {
    useEffect(() => {
        console.log("---Rechart---")
    }, [props])
    
  return (
    <div>
        <LineChart
            width={600}
            height={300}
            data={props}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="atk" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
    </div>
  )
});

export default Rechart