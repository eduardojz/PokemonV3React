import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  AddPokemon,
  getPokemonMockApi,
  getPokemonData,
  deletePokemon,
} from "./functions/Apis";
import AppRouter from "./AppRouter";
import {useNavigate} from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsCopy, setPokemonsCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [update, setUpdate] = useState(false);
  const [regex,setRegex]=useState(new RegExp("","i"))
  const pokemonsLimit = 20;
  useEffect(() => {
    const fetchData = async () => {
      try {
        //get favorites
        const favoritePokemons = await getPokemonMockApi();
        setFavorites(favoritePokemons);
        //
        var pokemonData = await getPokemonData({
          currentPage: currentPage,
          pokemonsLimit: pokemonsLimit,
        });
        const pokemonData2 = await getPokemonData({ pokemonsLimit: 1000 });
        setPokemonsCopy(pokemonData2);
        console.log("filter text",regex);
        if (!regex.test("?:") && regex!="") {
          console.log("no esta vacio");
           pokemonData = pokemonsCopy.filter(({ name }) => regex.test(name));
           console.log("data",pokemonData);
        }
        setPokemons(pokemonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [update]);
  function updatePage(e) {
    setCurrentPage(e.target.value);
    setUpdate(!update);
  }
  function redirectInfo(id) {
    navigate(`/pokedex/${id}`);
  }
  async function likePokemon(pokemon) {
    const verify = await AddPokemon(pokemon.id);
    //verify
    if (verify === true) {
      console.log("ya existe");
    } else {
      setUpdate(!update);
      console.log("agregado");
    }
  }
  async function deleteFavorite(id) {
    const verify = await deletePokemon(id);
    //verify
    if (verify === true) {
      console.log("ya existe");
    } else {
      setUpdate(!update);
      console.log("Elimninado");
    }
  }
  function searchText(e) {
    const regex = new RegExp(e.target.value, "i"); //  'i'  insensible a mayusculas/minusculas
    if (e.target.value !== "") {
      const filterData = pokemonsCopy.filter(({ name }) => regex.test(name));
      setRegex(regex)
      setPokemons(filterData);
    } else {
      setUpdate(!update);
    }
  }

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <Header pokemons={pokemons}></Header>
          <AppRouter
            pokemons={pokemons}
            updatePage={updatePage}
            pokemonsLimit={pokemonsLimit}
            redirectInfo={redirectInfo}
            likePokemon={likePokemon}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
            searchText={searchText}
          ></AppRouter>
        </>
      )}
    </div>
  );
};
export default App;
