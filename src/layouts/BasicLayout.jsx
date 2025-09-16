import React from "react";
import { Outlet } from "react-router";
import SiteNav from "../components/SiteNav";

const FavAnimalContext = React.createContext();

export default function BasicLayout() {
    const [favoriteAnimal, setFavoriteAnimal] = React.useState('Fox');
    return (
        <>
            <header>
                <SiteNav />
            </header>
            <FavAnimalContext.Provider value={{favoriteAnimal, setFavoriteAnimal}}>
                <main>
                    <Outlet />
                </main>
            </FavAnimalContext.Provider>
            <footer>FOOTER HERE</footer>
        </>
    )
}

export { FavAnimalContext }