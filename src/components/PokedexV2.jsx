import React from "react";
import "../styles/PokedexV2.css";
import CardPokemon from "./CardPokemon";
import Pagination from "./Pagination";
import Search from "./Search";

function PokedexV2({ pokemons,pokemonsLimit,updatePage,redirectInfo,likePokemon,favorites,deleteFavorite,searchText}) {
  return (
    <div className="main-container">
      <Search searchText={searchText}/>
      <div className="cards-container">
        <CardPokemon pokemons={pokemons} redirectInfo={redirectInfo} likePokemon={likePokemon} favorites={favorites} deleteFavorite={deleteFavorite} />
      </div>
      <Pagination pokemonsLimit={pokemonsLimit} updatePage={updatePage} />
    </div>
  );
}

export default PokedexV2;
