import React from "react";
import styles from "./exercise.module.css"; // Import your CSS module
import Link from "next/link";

const Exercise = () => {
    return (
        <>
            <div className={styles.body}>
                <nav className={styles.navbar}>
                    <div className={styles.navbarTabs}>
                        <img
                            src="/Exercise Images/Icon Black.svg"
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
                <main>
                    <div className={styles.cont}>
                        <div className={styles.overview}>
                            <div className={styles.flexL}>
                                <h1>Plan Overview</h1>
                                <img src="" alt="" />
                                <h2>Current Plan: Muscle Building</h2>
                                <p>Start Date: June 15 | End Date: Jan 31</p>
                                <p>
                                    Goal: Gain muscle mass and improve strength
                                </p>
                            </div>
                            <div className={styles.flexR}>
                                <h2>Progress</h2>
                                <div className={styles.progBar}>
                                    <div className={styles.progFill}></div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.exc}>
                            <h2>Today's Workout</h2>
                            <div className={styles.excFlex}>
                                <div className={styles.excFlexV}>
                                    <div
                                        className={`${styles.exc1} ${styles.excc}`}
                                    >
                                        <h3 className={styles.execName}>
                                            Push-ups
                                        </h3>
                                        <img
                                            src="/Exercise Images/pushup.svg"
                                            width="50%"
                                            alt="Push-ups"
                                            className={styles.imgExec}
                                        />
                                        <div className={styles.desc}>
                                            <p>Sets: 3</p>
                                            <p>Reps: 15</p>
                                            <p>Duration: 20mins</p>
                                            <p>Rest Time: 1min</p>
                                        </div>
                                    </div>
                                    <div className={styles.track}>
                                        <div className={styles.completed}>
                                            <input
                                                type="checkbox"
                                                id="completed1"
                                                name="comp1"
                                            />
                                            <label htmlFor="completed1">
                                                Completed
                                            </label>
                                        </div>
                                        <div className={styles.setCompleted}>
                                            <button>
                                                <p>+</p>
                                            </button>
                                            <p>Sets Completed: 0</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.excFlexV}>
                                    <div
                                        className={`${styles.exc2} ${styles.excc}`}
                                    >
                                        <h3 className={styles.execName}>
                                            Squats
                                        </h3>
                                        <img
                                            src="/Exercise Images/squats.svg"
                                            width="50%"
                                            alt="Squats"
                                            className={styles.imgExec}
                                        />
                                        <div className={styles.desc}>
                                            <p>Sets: 3</p>
                                            <p>Reps: 15</p>
                                            <p>Duration: 20mins</p>
                                            <p>Rest Time: 1min</p>
                                        </div>
                                    </div>
                                    <div className={styles.track}>
                                        <div className={styles.completed}>
                                            <input
                                                type="checkbox"
                                                id="completed2"
                                                name="comp2"
                                            />
                                            <label htmlFor="completed2">
                                                Completed
                                            </label>
                                        </div>
                                        <div className={styles.setCompleted}>
                                            <button>
                                                <p>+</p>
                                            </button>
                                            <p>Sets Completed: 0</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.excFlexV}>
                                    <div
                                        className={`${styles.exc3} ${styles.excc}`}
                                    >
                                        <h3 className={styles.execName}>
                                            Running
                                        </h3>
                                        <img
                                            src="/Exercise Images/running.svg"
                                            width="50%"
                                            alt="Running"
                                            className={styles.imgExec}
                                        />
                                        <div className={styles.desc}>
                                            <p>Sets: 3</p>
                                            <p>Reps: 15</p>
                                            <p>Duration: 20mins</p>
                                            <p>Rest Time: 1min</p>
                                        </div>
                                    </div>
                                    <div className={styles.track}>
                                        <div className={styles.completed}>
                                            <input
                                                type="checkbox"
                                                id="completed3"
                                                name="comp3"
                                            />
                                            <label htmlFor="completed3">
                                                Completed
                                            </label>
                                        </div>
                                        <div className={styles.setCompleted}>
                                            <button>
                                                <p>+</p>
                                            </button>
                                            <p>Sets Completed: 0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Exercise;
