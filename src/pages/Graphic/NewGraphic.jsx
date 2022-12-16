import React from "react";
import Chart from "chart.js/auto";

function NewGraphic() {
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [1, 2, 3, 4, 5],
      datasets: [
        {
          label: "Students",
          data: [50, 40, 25, 30, 15],
          backgroundColor: ["white"],
          borderColor: ["#80d8ff", "#82b1ff", "#b388ff", "#80d8ff", "#ea80fc"],
          borderWidth: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
    },
  });
  return (
    <div>
      <div>
        <canvas id="myChart" width="600px" height="300px">
          13
        </canvas>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>;
      </div>
    </div>
  );
}

export default NewGraphic;
