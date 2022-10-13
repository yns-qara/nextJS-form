import styles from "../styles/signUp.module.css"


const SignUp = () => {
    return (
        <div
            className={styles.form_container}
        >
            <form
                className={styles.container}
            >
                <h1>Create Account</h1>
                <div className={styles.name}>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="family name" />
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