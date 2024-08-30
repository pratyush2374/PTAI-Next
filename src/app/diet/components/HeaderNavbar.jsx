import React from "react";
import styles from "./HeaderNavbar.module.css"; // Import the CSS module
import Link from "next/link";

const HeaderNavbar = () => {
    return (
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
    );
};

export default HeaderNavbar;
