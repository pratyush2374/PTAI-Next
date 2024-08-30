import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./MealInfo.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const MealInfo = ({ meal }) => {
  const nutritionalData = {
    labels: ["Calories", "Protein", "Carbs", "Fat"],
    datasets: [
      {
        data: meal.nutritionalInfo
          .split(", ")
          .map((info) => parseFloat(info.match(/\d+/))),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#34eb9b"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#34eb9b"],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        position: "right", // Position the legend to the right
        labels: {
          color: "black", // Change legend text color
          usePointStyle: true, // Use point style for color markers
          pointStyle: "circle", // Style of the legend items
          padding: 20, // Padding between legend items
        },
      },
      tooltip: {
        callbacks: {
          labelTextColor: () => "#FFFFFF", // Change tooltip text color
        },
      },
    },
  };

  return (
    <div>
      <div className={styles.heading}>
        <h2>Meal Information</h2>
      </div>
      <div className={styles.mealInfo}>
        <div>
          <h3>Ingredients:</h3>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Portion Sizes:</h3>
          <ul>
            {meal.portionSizes.map((portion, index) => (
              <li key={index}>{portion}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Nutritional Info:</h3>
          <div className={styles.chartContainer}>
            <Doughnut data={nutritionalData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealInfo;
