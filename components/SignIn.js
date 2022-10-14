import styles from "../styles/signUp.module.css"
import Link from "next/link"
import axios from "axios"
import { useState } from "react"



const SignIn = () => {
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()

    const handleLogin = async () => {
        const user = axios.post("http://127.0.0.1:8000/api/signIn", { email, password })
    }


    return (
        <form className={styles.container}

            onSubmit={handleLogin}

        >
            <h1>Existing Account</h1>
            <pre>{debug.toString()}</pre>
            <p>don&apos;t have an account?<Link href="/createaccount"> sign up</Link> </p>
            <div className={styles.lower_input__for_login}>
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setpassword(e.target.value)}
                    required />
            </div>
            <button type="submit">sign in</button>
        </form>
    )
}

export default SignIn