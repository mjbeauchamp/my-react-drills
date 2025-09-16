import { useState } from "react"


export default function Home() {
    const [booped, setBooped] = useState(false)
    const [isOn, setIsOn] = useState(false)

    const boop = () => {
        console.log('BOOP!!')
        setBooped(true)
    }

    const toggle = () => {
        setIsOn((prev) => !prev)
    }

    return (
        <>
            HOME
            <button onClick={toggle}>{isOn ? 'Hide' : 'Show'} Me!!</button>
            {isOn && <h1>HOWDY!!</h1>}
        </>
    )
}