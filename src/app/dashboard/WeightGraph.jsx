// Add this at the top of your file
"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend);

const WeightGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [78, 77.5, 76, 75, 74, 73.5, 73, 72.5, 72, 72.2, 72.3, 72],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 50,
        max: 100,
        beginAtZero: false,
        ticks: {
          stepSize: 10, // Sets the gap between ticks to 10
        },
        grid: {
          borderDash: [5, 5],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Weight: ${tooltipItem.raw} kg`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeightGraph;
