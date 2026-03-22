'use client';
import Rickandmorty from "@/components/rickandmorty";
import Header from "@/components/header";
import {useState, useEffect} from "react";
import Footer from "@/components/footer";

type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

export default function Home() {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState<Character[]>([]);

    useEffect(() => {
        if (!searchText) {
            setSearchResults([]);
            return;
        }

        const timeoutId = setTimeout(async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchText}`);
                const data = await response.json();
                setSearchResults(data.results || []);
            } catch (error) {
                setSearchResults([]);
            }
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [searchText]);



    return (
        <div>
            <Header 
                searchText={searchText} 
                setSearchText={setSearchText}
            />
            <Rickandmorty searchResults={searchResults} hasSearch={!!searchText} />

            <Footer />
        </div>
    );
}
