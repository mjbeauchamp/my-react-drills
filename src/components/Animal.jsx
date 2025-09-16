import React from "react"
import { FavAnimalContext } from "../layouts/BasicLayout";

export default function Animal(props) {
    const [species, setSpecies] = React.useState('');
    const {setFavoriteAnimal} = React.useContext(FavAnimalContext)


    return (
        <>
            <h1>{props.animalName}</h1>
            <input type="text" name="species" value={species} onChange={e => setSpecies(e.target.value)} />
            {/* <button onClick={() => props.addAnimal(species)}>Add Animal</button> */}
                        <button onClick={() => setFavoriteAnimal(species)}>Add Animal</button>

        </>
    )
}