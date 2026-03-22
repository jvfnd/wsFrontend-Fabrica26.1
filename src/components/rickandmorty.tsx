'use client';
import {useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import './rickandmorty.css';

type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

interface RickandmortyProps {
    searchResults: Character[];
    hasSearch: boolean;
}

export default function Rickandmorty({ searchResults, hasSearch }: RickandmortyProps){
    const [characters, setCharacters] = useState<Character[]>([]);
    const router = useRouter();

    async function fetchCharacters() {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        return data.results;
    }

    useEffect(() => {
        fetchCharacters().then(data => setCharacters(data));
    }, []);

    const displayCharacters = hasSearch ? searchResults : characters;

    if (!displayCharacters.length) {
        return <p className="no-results">No results found.</p>;
    }

    function expandCard(character : Character){
        window.open(`/character/${character.id}`, '_blank');
    }



    return (
        <div className="card-container">
            {displayCharacters.map((character : Character) => (
                <div key={character.id} className="card" onClick={() => {expandCard(character)}}>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt={character.name} className="card-image"/>
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                </div>
            ))}
        </div>
    )
}