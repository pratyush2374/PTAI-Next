import Link from "next/link";
import styles from "./dashboard.module.css";
import React from "react";
import WeightGraph from "./WeightGraph";

const Dashboard = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarTabs}>
                    <img
                        src="/Dashboard Images/Icon Black.svg"
                        alt="App Icon"
                        className={styles.logo}
                    />
                    <Link
                        href="/dashboard"
                        className={`${styles.tab} ${styles.curr}`}
                        id="curr"
                    >
                        Dashboard
                    </Link>
                    <Link href="/exercise" className={styles.tab}>
                        Exercise
                    </Link>
                    <Link href="/diet" className={styles.tab}>
                        Diet
                    </Link>
                </div>
            </nav>

            <div className={styles.parent}>
                <div className={styles.main}>
                    <div className={styles.left}>
                        <div className={styles.welcomeMessage}>
                            <p className={styles.greeting}>Good Morning</p>
                            <h1>Welcome Back, Pratyush 🎉</h1>
                        </div>
                        <div className={styles.dataBoxes}>
                            <div className={styles.dataBox} id="steps-box">
                                <div className={styles.boxName}>
                                    <img
                                        src="/Dashboard Images/steps shoe.svg"
                                        alt="Steps"
                                    />
                                    <h2>Steps</h2>
                                </div>
                                <div
                                    className={styles.dataValue}
                                    id="steps-value"
                                >
                                    6,000
                                </div>
                                <div className={styles.status}>
                                    <div
                                        className={styles.filledStatusSteps}
                                    ></div>
                                    <div className={styles.emptyStatus}></div>
                                </div>
                            </div>

                            <div className={styles.dataBox} id="calories-box">
                                <div className={styles.boxName}>
                                    <img
                                        src="/Dashboard Images/fire color.svg"
                                        alt="Calories"
                                    />
                                    <h2>Calories</h2>
                                </div>
                                <div
                                    className={styles.dataValue}
                                    id="calories-value"
                                >
                                    2,000{" "}
                                    <span className={styles.unit}>cal</span>
                                </div>
                                <div className={styles.status}>
                                    <div
                                        className={styles.filledStatusCalories}
                                    ></div>
                                    <div className={styles.emptyStatus}></div>
                                </div>
                            </div>

                            <div className={styles.dataBox} id="water-box">
                                <div className={styles.boxName}>
                                    <img
                                        src="/Dashboard Images/water color.svg"
                                        alt="Water"
                                    />
                                    <h2>Water</h2>
                                </div>
                                <div
                                    className={styles.dataValue}
                                    id="water-value"
                                >
                                    2.5 <span className={styles.unit}>lit</span>
                                </div>
                                <div className={styles.status}>
                                    <div
                                        className={styles.filledStatusWater}
                                    ></div>
                                    <div className={styles.emptyStatus}></div>
                                </div>
                            </div>

                            <div className={styles.dataBox} id="sleep-box">
                                <div className={styles.boxName}>
                                    <img
                                        src="/Dashboard Images/sleep color.svg"
                                        alt="Sleep"
                                    />
                                    <h2>Sleep</h2>
                                </div>
                                <div
                                    className={styles.dataValue}
                                    id="sleep-value"
                                >
                                    7.8 <span className={styles.unit}>hrs</span>
                                </div>
                                <div className={styles.status}>
                                    <div
                                        className={styles.filledStatusSleep}
                                    ></div>
                                    <div className={styles.emptyStatus}></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.todaysPlan}>
                            <h1 className={styles.today}>Today's Plan</h1>
                            <div className={styles.exercise}>
                                <div className={styles.showEx}>
                                    <img
                                        src="/Dashboard Images/exercise doing.svg"
                                        alt="Exercise"
                                    />
                                    <h1 className={styles.ex}>Exercise</h1>
                                </div>
                                <div className={styles.exerciseInner}>
                                    <div className={styles.individualExercise}>
                                        <img
                                            src="/Dashboard Images/focus.svg"
                                            alt="Focus"
                                        />
                                        <div className={styles.exerciseDetails}>
                                            <h1>Chest</h1>
                                            <h2>Focus Area</h2>
                                        </div>
                                    </div>

                                    <div className={styles.individualExercise}>
                                        <img
                                            src="/Dashboard Images/duration.svg"
                                            alt="Duration"
                                        />
                                        <div className={styles.exerciseDetails}>
                                            <h1>
                                                42 <span>mins</span>
                                            </h1>
                                            <h2>Duration</h2>
                                        </div>
                                    </div>

                                    <div className={styles.individualExercise}>
                                        <img
                                            src="/Dashboard Images/exercise.svg"
                                            alt="Exercises"
                                        />
                                        <div className={styles.exerciseDetails}>
                                            <h1>16</h1>
                                            <h2>Exercises</h2>
                                        </div>
                                    </div>

                                    <div className={styles.individualExercise}>
                                        <img
                                            src="/Dashboard Images/fire.svg"
                                            alt="Calories"
                                        />
                                        <div className={styles.exerciseDetails}>
                                            <h1>
                                                ~426 <span>cal</span>
                                            </h1>
                                            <h2>Calories</h2>
                                        </div>
                                    </div>

                                    <div className={styles.individualExercise}>
                                        <img
                                            src="/Dashboard Images/difficulty.svg"
                                            alt="Level"
                                        />
                                        <div className={styles.exerciseDetails}>
                                            <h1>Intermediate</h1>
                                            <h2>Level</h2>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/exercise" className="nextLink">
                                    <div className={styles.goToExercise}>
                                        Go To Exercises
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.diet}>
                                <div className={styles.showDiet}>
                                    <img
                                        src="/Dashboard Images/diet.svg"
                                        alt="Diet"
                                    />
                                    <h1 className={styles.di}>Diet</h1>
                                </div>

                                <div className={styles.dietInner}>
                                    <div className={styles.individualDiet}>
                                        <div className={styles.dietLeft}>
                                            <img
                                                src="/Dashboard Images/food8.svg"
                                                alt="Breakfast"
                                            />
                                            <div className={styles.dietDetails}>
                                                <h1>Poha with Vegetables</h1>
                                                <h2>Breakfast</h2>
                                            </div>
                                        </div>
                                        <div className={styles.moreDietDetails}>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>8:00 AM</h2>
                                                <h3>Time</h3>
                                            </div>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>~200 cal</h2>
                                                <h3>calories</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.individualDiet}>
                                        <div className={styles.dietLeft}>
                                            <img
                                                src="/Dashboard Images/food1.svg"
                                                alt="Lunch"
                                            />
                                            <div className={styles.dietDetails}>
                                                <h1>
                                                    Dal Tadka, Brown Rice, Mixed
                                                    Vegetable Sabzi
                                                </h1>
                                                <h2>Lunch</h2>
                                            </div>
                                        </div>
                                        <div className={styles.moreDietDetails}>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>12:30 PM</h2>
                                                <h3>Time</h3>
                                            </div>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>~450 cal</h2>
                                                <h3>Calories</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.individualDiet}>
                                        <div className={styles.dietLeft}>
                                            <img
                                                src="/Dashboard Images/food2.svg"
                                                alt="Dinner"
                                            />
                                            <div className={styles.dietDetails}>
                                                <h1>
                                                    Paneer Tikka, Roti, Salad
                                                </h1>
                                                <h2>Dinner</h2>
                                            </div>
                                        </div>
                                        <div className={styles.moreDietDetails}>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>7:00 PM</h2>
                                                <h3>Time</h3>
                                            </div>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>~400 cal</h2>
                                                <h3>Calories</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.individualDiet}>
                                        <div className={styles.dietLeft}>
                                            <img
                                                src="/Dashboard Images/food3.svg"
                                                alt="Snacks"
                                            />
                                            <div className={styles.dietDetails}>
                                                <h1>Sprout Chaat</h1>
                                                <h2>Snacks</h2>
                                            </div>
                                        </div>
                                        <div className={styles.moreDietDetails}>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>4:00 PM</h2>
                                                <h3>Time</h3>
                                            </div>
                                            <div
                                                className={
                                                    styles.innerDietDetails
                                                }
                                            >
                                                <h2>~150 cal</h2>
                                                <h3>Calories</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.outerOverall}>
                                        <h1 className={styles.overallStats}>
                                            Overall Stats
                                        </h1>

                                        <div className={styles.overall}>
                                            <div className={styles.overallBox}>
                                                <img
                                                    src="/Dashboard Images/fire color.svg"
                                                    alt="Calorie"
                                                />
                                                <div
                                                    className={
                                                        styles.totalCalories
                                                    }
                                                >
                                                    <h2>
                                                        ~1250{" "}
                                                        <span
                                                            className={
                                                                styles.intakeUnit
                                                            }
                                                        >
                                                            cal
                                                        </span>
                                                    </h2>
                                                    <h3>Total Calories</h3>
                                                </div>
                                            </div>

                                            <div
                                                className={`${styles.overallBox} ${styles.allNutrient}`}
                                            >
                                                <div
                                                    className={styles.nutrient}
                                                >
                                                    <h2>Protein</h2>
                                                    <h3>75g</h3>
                                                </div>

                                                <div
                                                    className={styles.nutrient}
                                                >
                                                    <h2>Carbs</h2>
                                                    <h3>150g</h3>
                                                </div>

                                                <div
                                                    className={styles.nutrient}
                                                >
                                                    <h2>Fats</h2>
                                                    <h3>30g</h3>
                                                </div>
                                            </div>
                                            <div
                                                className={`${styles.overallBox} ${styles.extraOverall}`}
                                            >
                                                <img
                                                    src="/Dashboard Images/water color.svg"
                                                    alt="Calorie"
                                                />
                                                <div
                                                    className={
                                                        styles.waterOverall
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.waterOverallInner
                                                        }
                                                    >
                                                        <h2>
                                                            3{" "}
                                                            <span
                                                                className={
                                                                    styles.intakeUnit
                                                                }
                                                            >
                                                                lit
                                                            </span>
                                                        </h2>
                                                        <h2>
                                                            12{" "}
                                                            <span
                                                                className={
                                                                    styles.intakeUnit
                                                                }
                                                            >
                                                                glasses
                                                            </span>
                                                        </h2>
                                                    </div>
                                                    <h3>Hydration</h3>
                                                </div>
                                            </div>
                                            <div
                                                className={`${styles.overallBox} ${styles.extraOverall}`}
                                            >
                                                <img
                                                    src="/Dashboard Images/supplements.svg"
                                                    alt="Calorie"
                                                />
                                                <div
                                                    className={
                                                        styles.waterOverall
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.waterOverallInner
                                                        }
                                                    >
                                                        <h2>
                                                            30
                                                            <span
                                                                className={
                                                                    styles.intakeUnit
                                                                }
                                                            >
                                                                g (Whey Protein)
                                                            </span>
                                                        </h2>
                                                    </div>
                                                    <h3>Supplements</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/diet" className={styles.nextLink}>
                                    <div className={styles.goToDiet}>
                                        Go To Diet
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.userInfo}>
                        <div className={styles.user}>
                            <img
                                src="/Dashboard Images/profile.svg"
                                alt="profile"
                            />
                            <h1 className={styles.rightUserName}>
                                Pratyush Sharma
                            </h1>
                        </div>
                    </div>

                    <div className={styles.userDetails}>
                        <div className={styles.weight}>
                            <h2>
                                78<span className={styles.rightUnit}>kg</span>
                            </h2>
                            <h3>Weight</h3>
                        </div>
                        <div className={styles.height}>
                            <h2>
                                175<span className={styles.rightUnit}>cm</span>
                            </h2>
                            <h3>Height</h3>
                        </div>
                        <div className={styles.age}>
                            <h2>
                                20<span className={styles.rightUnit}>yrs</span>
                            </h2>
                            <h3>Age</h3>
                        </div>
                    </div>

                    <div className={styles.goals}>
                        <h1 className={styles.yrGoals}>Your Goals</h1>
                        <div className={styles.goalsInner}>
                            <img
                                src="/Dashboard Images/steps shoe.svg"
                                alt="Running"
                            />
                            <div className={styles.individualGoal}>
                                <h1>Running</h1>
                                <h2>30km/35km</h2>
                            </div>
                            <div className={styles.goalPercentage}>85.7%</div>
                        </div>

                        <div className={styles.goalsInner}>
                            <img
                                src="/Dashboard Images/weight color.svg"
                                alt="Weight Loss"
                            />
                            <div className={styles.individualGoal}>
                                <h1>Weight Loss</h1>
                                <h2>Target Weight: 73kg</h2>
                            </div>
                            <div className={styles.goalPercentage}>5kgs</div>
                        </div>

                        <div className={styles.goalsInner}>
                            <img
                                src="/Dashboard Images/sleep color.svg"
                                alt="Sleeping"
                            />
                            <div className={styles.individualGoal}>
                                <h1>Sleeping</h1>
                                <h2>47hrs/50hrs</h2>
                            </div>
                            <div className={styles.goalPercentage}>94%</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.lowerParent}>
                <div className={styles.otherStats}>
                    <div className={styles.weightSection}>
                        <div className={styles.weightHeading}>
                            <h1 className={styles.weightH1}>
                                Weight <span>(kg)</span>
                            </h1>
                            <h1 className={styles.addWeight}>+</h1>
                        </div>

                        <div className={styles.weightDetails}>
                            <div className={styles.weightIndividual}>
                                <h3>Current</h3>
                                <h2>78</h2>
                            </div>

                            <div className={styles.weightIndividual}>
                                <h3>Goal</h3>
                                <h2>72</h2>
                            </div>

                            <div className={styles.weightIndividual}>
                                <h3>Last 30 days</h3>
                                <h2>-2.0</h2>
                            </div>

                            <div className={styles.weightIndividual}>
                                <h3>Annual Average</h3>
                                <h2>77</h2>
                            </div>
                        </div>
                        <div className={styles.weightGraph}>
                            <WeightGraph />
                        </div>
                    </div>

                    <div className={styles.allStats}>
                        <div className={styles.allStatsHeading}>
                            <h1>All Stats</h1>
                        </div>

                        <div className={styles.allStatsSection}>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/threadmill.svg"
                                    alt="Fire"
                                />
                                <div className={styles.indiStats}>
                                    <h1>27</h1>
                                    <h2>Total Workouts</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/fire color.svg"
                                    alt="Calories"
                                />
                                <div className={styles.indiStats}>
                                    <h1>12780</h1>
                                    <h2>Total Calories Burnt</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/time.svg"
                                    alt="Time"
                                />
                                <div className={styles.indiStats}>
                                    <h1>1260 mins</h1>
                                    <h2>Total Minutes Worked</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/crown.svg"
                                    alt="Streak"
                                />
                                <div className={styles.indiStats}>
                                    <h1>30</h1>
                                    <h2>Highest Streak</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/exercise doing.svg"
                                    alt="Average"
                                />
                                <div className={styles.indiStats}>
                                    <h1>150</h1>
                                    <h2>Average Calories Burnt Per Workout</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/goal.svg"
                                    alt="Goal"
                                />
                                <div className={styles.indiStats}>
                                    <h1>92%</h1>
                                    <h2>Goal Achievement</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/food6.svg"
                                    alt="Meal"
                                />
                                <div className={styles.indiStats}>
                                    <h1>114</h1>
                                    <h2>Total Meals Logged</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/water color.svg"
                                    alt="Water"
                                />
                                <div className={styles.indiStats}>
                                    <h1>93L</h1>
                                    <h2>Total Water Intake</h2>
                                </div>
                            </div>
                            <div className={styles.individualStats}>
                                <img
                                    src="/Dashboard Images/sleep color.svg"
                                    alt="Sleep"
                                />
                                <div className={styles.indiStats}>
                                    <h1>240</h1>
                                    <h2>Total Hours Slept</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerLogo}>
                        <img
                            src="/Dashboard Images/Icon Black.svg"
                            alt="PTAI Logo"
                            width="50px"
                        />
                    </div>
                    <div className={styles.footerLinks}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#dashboard">Home</a>
                            </li>
                            <li>
                                <a href="#exercise">Exercise</a>
                            </li>
                            <li>
                                <a href="#diet">Diet</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footerSocial}>
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Dashboard Images/facebook.svg"
                                        alt="Facebook"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Dashboard Images/twitter.svg"
                                        alt="Twitter"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Dashboard Images/ins.svg"
                                        alt="Instagram"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Dashboard Images/link.svg"
                                        alt="LinkedIn"
                                        width="20px"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; 2024 PTAI. All rights reserved.</p>
                </div>
            </footer>
            <script src="script.js"></script>
        </>
    );
};

export default Dashboard;
