"use client"
import React, { useState } from "react";
import styles from "./DailyMealOverview.module.css";
import MealInfo from "./MealInfo";
import GroceryList from "./GroceryList";
import TipsAndTricks from "./TipsAndTricks";
import TomorrowGroceryList from "./TomorrowGroceryList";

const DailyMealOverview = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [initialMessageShown, setInitialMessageShown] = useState(true);
  const [selectedTab, setSelectedTab] = useState("today");

  const meals = {
    breakfast: {
      ingredients: ["Eggs", "Bread", "Butter"],
      portionSizes: ["2 eggs", "2 slices of bread", "1 tbsp butter"],
      nutritionalInfo: "300 calories, 20g protein, 15g carbs, 10g fat",
    },
    lunch: {
      ingredients: ["Chicken", "Rice", "Vegetables"],
      portionSizes: ["200g chicken", "1 cup rice", "1 cup vegetables"],
      nutritionalInfo: "600 calories, 40g protein, 60g carbs, 20g fat",
    },
    dinner: {
      ingredients: ["Fish", "Quinoa", "Salad"],
      portionSizes: ["150g fish", "1 cup quinoa", "1 bowl salad"],
      nutritionalInfo: "400 calories, 50g protein, 100g carbs, 15g fat",
    },
  };

  const tips = {
    breakfast: "Try adding a fruit or a small smoothie for extra vitamins.",
    lunch: "Add a side salad to increase fiber intake.",
    dinner: "Include a small serving of dessert like yogurt or fruit.",
  };

  const groceryList = {
    breakfast: ["Eggs", "Bread", "Butter", "Fruit"],
    lunch: ["Chicken", "Rice", "Vegetables", "Olive oil"],
    dinner: ["Fish", "Quinoa", "Salad greens", "Lemon"],
  };

  const handleMealClick = (mealType) => {
    setSelectedMeal(mealType);
    setInitialMessageShown(false);
  };

  return (
    <div>
      <div className={styles.mealOptions}>
        <button
          className={styles.mealButton}
          onClick={() => handleMealClick("breakfast")}
        >
          <img
            src="/Diet Images/breakfast.svg"
            alt="Breakfast"
            className={styles.mealImage}
          />
          <span className={styles.mealName}>Breakfast</span>
        </button>
        <button
          className={styles.mealButton}
          onClick={() => handleMealClick("lunch")}
        >
          <img
            src="/Diet Images/lunch.svg"
            alt="Lunch"
            className={styles.mealImage}
          />
          <span className={styles.mealName}>Lunch</span>
        </button>
        <button
          className={styles.mealButton}
          onClick={() => handleMealClick("dinner")}
        >
          <img
            src="/Diet Images/dinner.svg"
            alt="Dinner"
            className={styles.mealImage}
          />
          <span className={styles.mealName}>Dinner</span>
        </button>
      </div>
      {initialMessageShown && !selectedMeal && (
        <div className={styles.initialMessage}>
          Please select a meal to see more details.
        </div>
      )}
      {selectedMeal && (
        <>
          <MealInfo meal={meals[selectedMeal]} />
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleButton} ${
                selectedTab === "today" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("today")}
            >
              Today's Details
            </button>
            <button
              className={`${styles.toggleButton} ${
                selectedTab === "tomorrow" ? styles.active : ""
              }`}
              onClick={() => setSelectedTab("tomorrow")}
            >
              Tomorrow's Grocery List
            </button>
          </div>
          <div className={styles.detailsContainer}>
            <div
              className={`${styles.detailsSection} ${
                selectedTab === "today" ? styles.active : styles.inactive
              }`}
            >
              <GroceryList items={groceryList[selectedMeal]} />
              <TipsAndTricks tips={tips[selectedMeal]} />
            </div>
            <div
              className={`${styles.detailsSection} ${
                selectedTab === "tomorrow" ? styles.active : styles.inactive
              }`}
            >
              <TomorrowGroceryList items={groceryList[selectedMeal]} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DailyMealOverview;
