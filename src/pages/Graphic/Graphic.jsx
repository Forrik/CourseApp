import React from "react";
import style from "./Graphic.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Screen() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Ммоль/л в крови",
        data: [6, 5, 3, 5, 2, 3, 5, 6, 4],
        fill: false,
        backgroundColor: "#be185d",
        borderColor: "#1d4ed8",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  return (
    <div>
      <div className="graphic">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Screen;
