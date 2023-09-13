import React from "react";
import { selectType } from "../assets/imports/imports";
import "../styles/Cards.css";
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
          <div className="buttons">
            {/*button like dislile*/}
            {favorites.some((favorite) => favorite.idPokemon === item.id) ? (
              <>
                <p className="like">❤️</p>
                <img
                  onClick={() => deleteFavorite(item.id)}
                  src={selectType("trash")}
                  alt="trash"
                  className="delete"
                />
              </>
            ) : (
              <button className="btnAdd" onClick={() => likePokemon(item)}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                  </svg>{" "}
                  Add Favorite
                </span>
              </button>
            )}
          </div>
          <div className="card-img" onClick={() => redirectInfo(item.id)}>
            <img src={item.img} alt={item.name} />
          </div>
          <div className="pokemon-info">
            <p>N°{item.id}</p>
            <h5>{item.name}</h5>
            <div className="types">
              {item.types.map((type, indextype) => (
                <div className={selectType(type)[1]} key={indextype}>
                  <img src={selectType(type)[0]} alt="" />
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
