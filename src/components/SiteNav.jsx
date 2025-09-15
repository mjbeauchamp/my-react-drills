import { Link } from "react-router"

export default function SiteNav() {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </>
    )
}