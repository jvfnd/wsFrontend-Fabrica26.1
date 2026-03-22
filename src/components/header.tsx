'use client';
import './rickandmorty.css';


interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
}


export default function Header({ searchText, setSearchText}: HeaderProps){
    function changedisplaybutton(){
        const display = document.querySelector<HTMLElement>('.card-container');
        if(!display) return;
        display.classList.toggle('list-mode');
    }


    return (
        <header className="header">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
                alt="RickMortyLogo"
                className="header-image"
            />
            <input type="text" placeholder="  Search..." className="search-bar" value={searchText}
                   onChange={(e) => setSearchText(e.target.value)}/>

            <button className="display-button" onClickCapture={() => {
                changedisplaybutton();
            }}>Alternate View</button>


        </header>
    )
}