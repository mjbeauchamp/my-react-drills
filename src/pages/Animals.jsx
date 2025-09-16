import React from "react";
import Animal from "../components/Animal";
import { FavAnimalContext } from "../layouts/BasicLayout";

export default function Animals() {
    const [selectedAnimalIds, setSelectedAnimalIds] = React.useState([])
    const [animals, setAnimals] = React.useState([{id: 1, species: 'Bears'}, {id: 2, species: 'Foxes'}, {id: 3, species: 'Deer'}]);
    const [myFavorites, setMyFavorites] = React.useState({})

    const {favoriteAnimal} = React.useContext(FavAnimalContext)

    const selectAnimal = (animalId) => {
        setSelectedAnimalIds((prev) => {
            return prev.includes(animalId) ? prev.filter(id => id !== animalId) : [...prev, animalId]
        })
    }

    const updateFavorites = (event) => {
        event.preventDefault();
        console.log(event.target)
        const data = new FormData(event.target);
        console.log('DATA: ', Object.fromEntries(data.entries()))
    }

    const addAnimal = (species) => {
        setAnimals(prev => {
            const newId = prev[prev.length - 1].id + 1;

            return [...prev, {id: newId, species: species}]
        })
    }

    const displayedAnimalButtons = animals.map((animal) => {
        return <li onMouseEnter={() => {console.log(animal.species)}} key={animal.id} style={selectedAnimalIds.includes(animal.id) ? {color: 'red'} : null}>
                {animal.species}
                <button onClick={() => selectAnimal(animal.id)}>Select</button>
            </li>
    })

    const displayedAnimals = selectedAnimalIds.map(animalId => {
        const animal = animals.find(item => item.id === animalId)
         
        return (
            <div>
                <Animal animalName={animal.species} addAnimal={addAnimal} />
            </div>
        )
    })

    return (
        <>
            ANIMALS
            <h1>{favoriteAnimal}</h1>

            <ul>
                {displayedAnimalButtons}
            </ul>

            <div>
                {displayedAnimals}
            </div>

            <form onSubmit={updateFavorites}>
                <label>
                    Favorite Key
                    <input type="text" name='favKey' />
                </label>
                <label>
                    Favorite Value
                    <input type="text" name='favValue' />
                </label>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}