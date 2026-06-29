"use client";
import { Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(...registerables);

const Stats = () => {
  const data = {
    labels: ["Text", "Call", "Video", "Instagram", "Email"],
    datasets: [
      {
        label: "Interactions",
        data: [300, 50, 100, 10, 20],
        backgroundColor: [
          "rgb(255, 99, 132)", // Text
          "rgb(54, 162, 235)", // Call
          "rgb(255, 205, 86)", // Video
          "rgb(75, 192, 192)", // Instagram
          "rgb(153, 102, 255)", // Email
        ],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Friendship Interaction Breakdown",
        font: {
          size: 12,
        },
      },
    },
  };

  return (
    <div className="py-15 px-25 h-full bg-[#F3F6FA] text-black">
      <h1 className="text-[#37A69B] text-4xl font-semibold">
        Friendship Analytics
      </h1>
      <div className="bg-white rounded-lg shadow-sm mt-5 p-10">
        <h2 className="text-xl font-semibold mb-2">By Interaction Types</h2>
        <div className="max-w-[600px] mx-auto w-fit">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
