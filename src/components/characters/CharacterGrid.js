import React from "react";
import Spinner from "../ui/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isLoading }) => {
    if(isLoading) return <Spinner />

    return (
        <section className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
    );
}

export default CharacterGrid;