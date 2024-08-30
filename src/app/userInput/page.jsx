"use client";

import "./userInput.css";
import React, { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import styles from "./userinput.module.css"

const UserInput = () => {
    const [step, setStep] = useState(1);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [goal, setGoal] = useState("");
    const [pace, setPace] = useState("");
    const [diet, setDiet] = useState("");
    const [age, setAge] = useState("");

    const goals = [
        "Lose Weight",
        "Gain Weight",
        "Stay Fit",
        "Build Muscle",
        "Increase Stamina",
        "Improve Flexibility",
        "Weight Maintenance",
    ];

    const diets = ["Non-Vegetarian", "Vegetarian", "Vegan", "Eggetarian"];

    const handleSubmit = () => {
        console.log("Submitted:", { height, weight, goal, pace, diet });
        // Here you would typically send this data to a server or perform further actions
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
                {step === 1 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black">
                            Enter Your Details
                        </h2>
                        <input
                            type="number"
                            placeholder="Height (cm)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full p-2 rounded bg-gray-200 text-black placeholder-gray-500"
                        />
                        <input
                            type="number"
                            placeholder="Weight (kg)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full p-2 rounded bg-gray-200 text-black placeholder-gray-500"
                        />
                        
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="w-full p-2 rounded bg-gray-200 text-black placeholder-gray-500"
                        />
                        <button
                            onClick={() => setStep(2)}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black">
                            Choose Your Goal
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {goals.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        setGoal(option);
                                        setStep(3);
                                    }}
                                    className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded flex items-center justify-between"
                                >
                                    <span>{option}</span>
                                    <X
                                        className="opacity-0 group-hover:opacity-100"
                                        size={20}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black">
                            Choose Your Pace
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            {["Slow", "Medium", "Fast"].map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setPace(option)}
                                    className={`p-4 rounded-lg ${
                                        pace === option
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                    } hover:bg-gray-300 transition-all duration-200`}
                                >
                                    <img
                                        src={`/UserInput Images/${option}.svg`}
                                        alt={option}
                                        className={`w-full h-32 object-cover rounded-md mb-2 ${styles.imageFit}`}
                                    />
                                    <span className="font-bold">{option}</span>
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setStep(4)}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
                        >
                            Next
                        </button>
                    </div>
                )}

                {step === 4 && (
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-black">
                            Dietary Preference
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {diets.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => setDiet(option)}
                                    className={`p-4 rounded-lg ${
                                        diet === option
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-black"
                                    } hover:bg-gray-300 transition-all duration-200`}
                                >
                                    <img
                                        src={`/UserInput Images/${option}.svg`}
                                        alt={option}
                                        className={`w-full h-32 object-cover rounded-md mb-2 ${styles.imageFitDiet}`}
                                    />
                                    <span className="font-bold">{option}</span>
                                </button>
                            ))}
                        </div>
                        <Link href="/dashboard">
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
                            >
                                Submit
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserInput;