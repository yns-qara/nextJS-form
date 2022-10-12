import styles from "../styles/signUp.module.css"


const SignUp = () => {
    return (
        <div
            className={styles.form_container}
        >
            <form
                className={styles.container}
            >
                <h1>this is a sign up form</h1>
                <div className={styles.name}>
                    <input type="text" />
                    <input type="text" />
                </div>

                <input type="email" />
                <input type="tel" />
                <input type="password" />
                <button type="submit">sign up</button>
            </form>
        </div>
    )
}


export default SignUp