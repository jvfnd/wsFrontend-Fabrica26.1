'use client';

import { useEffect, useState, use } from 'react';
import '../../../components/rickandmorty.css';

type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    origin: { name: string };
    location: { name: string };
    episode: string[];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        async function fetchCharacter() {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await response.json();
            setCharacter(data);
        }
        fetchCharacter();
    }, [id]);

    if (!character) {
        return <p className="no-results">Loading...</p>;
    }

    return (
        <div className="card-container-expanded">
            <div className="card-expanded">
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} className="card-image-expanded"/>
                <p>Status: {character.status}</p>
                <p>Specie: {character.species}</p>
                <p>Type: {character.type || 'N/A'}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin?.name}</p>
                <p>Location: {character.location?.name}</p>
                <p>Appeared in  {character.episode?.length} Episodes</p>
            </div>
        </div>
    );
}
