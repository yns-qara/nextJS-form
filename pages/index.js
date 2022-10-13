import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"

import { useState } from "react"
export default function Home() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {
        !toggle ? <SignIn
          toggle={toggle}
          setToggle={setToggle} /> : <SignUp
          toggle={toggle}
          setToggle={setToggle} />
      }
    </>
  )
}
