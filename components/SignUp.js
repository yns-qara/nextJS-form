import styles from "../styles/signUp.module.css"
import Link from "next/link"

const SignUp = () => {
    return (
        <div
            className={styles.form_container}
        >
            <form
                className={styles.container}
            >
                <h1>Create Account</h1>
                <p>Already have an account? <Link href="">sign in</Link> </p>
                <div className={styles.name}>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="last name" />
                </div>
                <div className={styles.lower_input}>
                    <input type="email" placeholder="email" />
                    <input type="tel" placeholder="phone number" />
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit">sign up</button>
            </form>
        </div>
    )
}


export default SignUp