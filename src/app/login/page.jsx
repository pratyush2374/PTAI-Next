import Link from "next/link";
import styles from "./login.module.css";

const Login = () => {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.imageSection}>
                        <img src="/Login Images/Login.png" alt="Login" />
                    </div>
                    <div className={styles.formSection}>
                        <h2>Login</h2>
                        <form>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your Email here"
                            />

                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your Password here"
                                className={styles.password}
                            />

                            <Link href="/dashboard"><button type="submit">Login</button></Link>
                        </form>
                        <p>
                            Don't have an account? <Link href="/sign-up">Sign Up</Link>
                        </p>
                        <div className={styles.socialLogin}>
                            <p>— OR —</p>
                            <div className={styles.google}>
                                <img
                                    src="/Login Images/Google Icon.svg"
                                    alt="G icon"
                                    width="30px"
                                />
                                Sign in with Google
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
