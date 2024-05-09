import React, { useEffect, useRef } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
 } from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart instance
      chartRef.current.destroy();
    }

    const ctx = document.getElementById("line-chart");
    const chart = new ChartJS(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "rgba(48, 130, 207,0.2)",
            borderColor: "#3182ce",
            data: [46, 66, 77, 44, 56, 67, 75,35,90,48,65,50],
            fill: true,
            tension:.3
          },
          {
            label: new Date().getFullYear() - 1,
            fill: true,
            backgroundColor: "rgba(255, 85, 85, 0.2)",
            borderColor: "#FC523D",
            data: [55,55, 68, 86, 74, 56, 60, 87,40,28,79,80],
            tension:.3
          },
        ],
      },
      options: {
        plugins:{
            legend: {
                labels: {
                    pointStyle:"circle",
                    usePointStyle: true,
                },

              },

        },

        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              min:2,
              max:10,
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
                stepSize:2,
                callback:(value) => value + 'k'

              },
              display: true,
              scaleLabel: {

              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    });

    // Store chart instance in ref for cleanup
    chartRef.current = chart;

    return () => {
      // Clean up chart instance
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);


    const data = {}
    const options = {}

  return (
    <div className="relative  bg-white  flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Overview
            </h6>
            <h2 className=" text-xl font-semibold">Sales value</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
      </div>
    </div>

  );
}
