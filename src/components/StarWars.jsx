import React from "react"

export default function StarWars() {
    const [characters, setCharacters] = React.useState([])
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const displayedCharacters = characters.map(character => {
        return <li key={character.url}>{character.name}</li>
    })

    return (
        <>
            <p>{windowWidth}</p>
            <ul>
                {displayedCharacters}
            </ul>
        </>
    )
}