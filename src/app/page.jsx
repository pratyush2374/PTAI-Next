import Link from "next/link";

const LandingPage = () => {
    return (
        <>
            <div className="navbar" id="home">
                <div className="innerNav">
                    <div className="nameAndIcon">
                        <a href="#">
                            <img
                                src="/Landing Images/Icon Black.svg"
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <ul className="links">
                        <li>
                            <a href="#features">Features</a>
                        </li>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <div>
                        <Link href="/login" className="nextLink">
                            <p className="login">Login/Sign Up</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="hero1">
                <div className="slogan">
                    <h1>PTAI</h1>
                    <p>Transform Your Fitness Journey with AI</p>
                </div>

                <div className="bmi">
                    <div className="bmiInner">
                        <div className="calBMI">
                            <h1>Enter Details</h1>
                            <form>
                                <input
                                    type="text"
                                    name="height"
                                    id="height"
                                    className="handw"
                                    placeholder="Height (in cm)"
                                />
                                <input
                                    type="text"
                                    name="weight"
                                    id="weight"
                                    className="handw"
                                    placeholder="Weight (in kg)"
                                />

                                <div className="gender">
                                    <input
                                        type="radio"
                                        name="gender"
                                        id="male"
                                        value="male"
                                    />
                                    <label htmlFor="male">Male</label>

                                    <input
                                        type="radio"
                                        name="gender"
                                        id="female"
                                        value="female"
                                    />
                                    <label htmlFor="female">Female</label>

                                    <input
                                        type="radio"
                                        name="gender"
                                        id="others"
                                        value="others"
                                    />
                                    <label htmlFor="others">Others</label>
                                </div>

                                <div className="convertToftandpound">
                                    <p>Convert to ft and pound</p>
                                </div>

                                <div className="button">
                                    <p></p>
                                </div>
                            </form>
                        </div>

                        <div className="outerBar">
                            <div className="barForBmi"></div>
                            <div className="arrow">
                                <b>^</b>
                            </div>
                            <div className="userbmi">
                                <h2>24</h2>
                                <h3>Your BMI</h3>
                            </div>
                        </div>
                    </div>
                    <div className="fitness-goals">
                        <h2>What Are Your Fitness Goals?</h2>
                        <div className="goals-list">
                            <div className="goal-item">Lose Weight</div>
                            <div className="goal-item">Build Muscle</div>
                            <div className="goal-item">Improve Stamina</div>
                            <div className="goal-item">Enhance Flexibility</div>
                            <div className="goal-item">
                                Boost Overall Health
                            </div>
                        </div>
                        <Link href="/login">
                            <button className="show-plan">
                                See Your Personalized Plan
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="seperator"></div>

            <div className="features" id="features">
                <div className="features-box">
                    <h1>Features of HolisticFit AI</h1>
                    <div className="feature-list">
                        <div className="feature-item">
                            <h2>Personalized Diet Plans</h2>
                            <p>
                                Get customized diet plans tailored to your
                                fitness goals and dietary preferences.
                            </p>
                        </div>
                        <div className="feature-item">
                            <h2>Exercise Recommendations</h2>
                            <p>
                                Receive exercise routines designed to help you
                                achieve your fitness objectives effectively.
                            </p>
                        </div>
                        <div className="feature-item">
                            <h2>Progress Tracking</h2>
                            <p>
                                Track your progress with detailed analytics and
                                insights on your fitness journey.
                            </p>
                        </div>
                        <div className="feature-item">
                            <h2>AI-Powered Insights</h2>
                            <p>
                                Utilize AI-driven insights to optimize your
                                fitness regimen and dietary choices.
                            </p>
                        </div>
                        <div className="feature-item">
                            <h2>Custom Workout Plans</h2>
                            <p>
                                Generate workout plans that adapt to your
                                progress and changing fitness needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="seperator"></div>

            <div className="about-us" id="about">
                <div className="about-content">
                    <h1>About PTAI</h1>
                    <p>Transform Your Fitness Journey with AI</p>
                    <p>
                        At PTAI, we believe in the power of artificial
                        intelligence to enhance your physical fitness journey.
                        Our state-of-the-art AI technology offers personalized
                        workout plans, real-time progress tracking, and smart
                        recommendations to help you achieve your fitness goals
                        efficiently and effectively.
                    </p>
                </div>
                <div className="about-image">
                    <img
                        src="/Landing Images/exercise.jpg"
                        alt="PTAI Physical Fitness"
                        width="200px"
                    />
                </div>
            </div>

            <div className="seperator"></div>

            <div className="contact-us" id="contact">
                <div className="contact-form-container">
                    <div className="contact-form">
                        <h1>Contact Us</h1>
                        <form>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="contact-input"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="contact-input"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="contact-textarea"
                                required
                            ></textarea>
                            <button type="submit" className="contact-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="contact-image">
                        <img src="/Landing Images/contact.png" alt="contact" />
                    </div>
                </div>
            </div>

            <div className="seperator"></div>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img
                            src="/Landing Images/Icon.svg"
                            alt="PTAI Logo"
                            width="50px"
                        />
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About Us</a>
                            </li>
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Landing Images/facebook.svg"
                                        alt="Facebook"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Landing Images/twitter.svg"
                                        alt="Twitter"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Landing Images/instagram.svg"
                                        alt="Instagram"
                                        width="20px"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img
                                        src="/Landing Images/linkedin.svg"
                                        alt="LinkedIn"
                                        width="20px"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 PTAI. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default LandingPage;
