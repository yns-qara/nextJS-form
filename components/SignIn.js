import styles from "../styles/signUp.module.css"
import Link from "next/link"

const SignIn = ({ toggle, setToggle }) => {
    return (
        <form className={styles.container}>
            <h1>Existing Account</h1>
            <p>don't have an account? 
                <span onClick={()=>setToggle(!toggle)}>
                    <Link href=""> sign up</Link>
                </span>
            </p>
            <div className={styles.lower_input__for_login}>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
            </div>
            <button type="submit">sign in</button>
        </form>
    )
}

export default SignIn