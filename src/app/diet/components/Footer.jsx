import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img
                        src="/Diet Images/Icon Black.svg"
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
                                    src="/Diet Images/facebook.svg"
                                    alt="Facebook"
                                    width="20px"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/Diet Images/twitter.svg"
                                    alt="Twitter"
                                    width="20px"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/Diet Images/instagram.svg"
                                    alt="Instagram"
                                    width="20px"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                    src="/Diet Images/link.svg"
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
    );
};

export default Footer;
