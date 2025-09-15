import { Outlet } from "react-router";
import SiteNav from "../components/SiteNav";

export default function BasicLayout() {
    return (
        <>
            <header>
                <SiteNav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>FOOTER HERE</footer>
        </>
    )
}