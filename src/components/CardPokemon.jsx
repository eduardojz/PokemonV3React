import React from "react";
import { selectType } from "../assets/imports/imports";

function CardPokemon({
  pokemons,
  redirectInfo,
  likePokemon,
  favorites,
  deleteFavorite,
}) {
  return (
    <>
      {pokemons.map((item, index) => (
        <article className="card" key={index}>
          {favorites.some((favorite) => favorite.idPokemon === item.id) ? (
            <div className="buttons">
              <p className="like">❤️</p>
              <button
                onClick={() => deleteFavorite(item.id)}
                className="delete"
              >
                Delete
              </button>
            </div>
          ) : (
            <button className="btnAdd" onClick={() => likePokemon(item)}>
              Like
            </button>
          )}
          <div className="card-img" onClick={() => redirectInfo(item.id)}>
            <img src={item.img} alt={item.name} />
          </div>
          <div className="pokemon-info">
            <p>N°{item.id}</p>
            <h5>{item.name}</h5>
            <div className="types">
              {item.types.map((type, indextype) => (
                <div className={selectType(type)[1]} key={indextype}>
                  {type}
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default CardPokemon;
