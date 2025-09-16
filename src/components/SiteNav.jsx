import { NavLink } from "react-router"
import styles from './SiteNav.module.css'

export default function SiteNav() {
    
    return (
        <nav>
            <NavLink to='/' className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
            <NavLink to='/about' className={({isActive}) => isActive ? styles.active : ''}>About</NavLink>
            <NavLink to='/animals' className={({isActive}) => isActive ? styles.active : ''}>Animals</NavLink>
                        <NavLink to='/star-wars' className={({isActive}) => isActive ? styles.active : ''}>Star Wars</NavLink>

        </nav>
    )
}