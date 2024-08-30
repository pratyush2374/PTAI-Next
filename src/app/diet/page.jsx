import React from "react";
import HeaderNavbar from "./components/HeaderNavbar";
import DailyMealOverview from "./components/DailyMealOverview";
import Footer from "./components/Footer";
import styles from "./diet.module.css"

const Diet = () => {
    return (
        <>
            <div className={styles.body}>
                <HeaderNavbar />
                <div className={styles.Mealoptions}>
                    <DailyMealOverview />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Diet;
