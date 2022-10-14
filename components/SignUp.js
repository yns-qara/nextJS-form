import styles from "../styles/signUp.module.css"
import Link from "next/link"

const SignUp = () => {
    return (
        <form
            className={styles.container}
        >
            <h1>Create Account</h1>
            <p>Already have an account?<Link href="/login"> sign in</Link></p>
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
    )
}


export default SignUp