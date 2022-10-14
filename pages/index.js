
// for demonstration purposes only
import Link from "next/link";
import s from "../styles/temp.module.css"
export default function Home() {
  return (
    <>
      <div className={s.temp_nav}>
          <Link href="/login">sign in</Link>
          <Link href="/createaccount">sign up</Link>
      </div>
    </>
  )
}
