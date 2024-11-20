import { memo, useEffect, useState, useCallback } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title
  } from "chart.js";

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
    Title
);

const ChartJS2 = memo(({props}) => {
    const [labels, setLabels] = useState([]);
    const [dataList, setDataList] = useState([]);
    
     const initFun = ()=>{
        setLabels([]);
        setDataList([]);
        props.map((prop) => {
            setLabels(preData => [...preData, prop.name]);
            setDataList( preData =>[...preData, prop.atk]);
        })
     }
     
    useEffect(()=>{
        console.log("---ChartJS2---")
        initFun();
    },[props])

    const data = {
        labels,
        datasets: [
          {
            type: "line",
            label: 'label...1',
            data: dataList,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            pointRadius: 5, // 포인트 크기
            pointBackgroundColor: "rgba(255, 99, 132, 1)", // 포인트 배경색
            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
            pointHoverRadius: 7, // 호버 시 포인트 크기
            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
            fill: false, // 라인 그래프에서 영역 채우기 비활성화
          },
          {
            type: "bar",
            label: 'label...2',
            data: dataList,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            pointRadius: 5, // 포인트 크기
            pointBackgroundColor: "rgba(0, 99, 132, 1)", // 포인트 배경색
            pointBorderColor: "rgba(255, 255, 255, 1)", // 포인트 테두리 색
            pointHoverRadius: 7, // 호버 시 포인트 크기
            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)", // 호버 시 포인트 배경색
            pointHoverBorderColor: "rgba(255, 255, 255, 1)", // 호버 시 포인트 테두리 색
            fill: false, // 라인 그래프에서 영역 채우기 비활성화
          },
        ],
      };

    const options = {
        plugins: {
            title: {
              display: true,
              text: "Chart.js 2"
            },
            legend: {
              position: "bottom"
            }
          },
          responsive: true,
        scales: {
            x: {
                display: true,
                },
            y: {
                beginAtZero: true
            }
        }
    };
    return <Chart data={data} options={options} />;
})

export default ChartJS2;