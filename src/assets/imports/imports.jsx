import bug from "../icons/bug.svg";
import dark from "../icons/dark.svg";
import dragon from "../icons/dragon.svg";
import electric from "../icons/electric.svg"; 
import fairy from "../icons/fairy.svg";
import fire from "../icons/fire.svg";
import fighting from "../icons/fighting.svg";
import flying from "../icons/flying.svg"
import ghost from "../icons/ghost.svg";
import grass from "../icons/grass.svg";
import ground from "../icons/grass.svg";
import ice from "../icons/ice.svg";
import normal from "../icons/normal.svg";
import poison from "../icons/poison.svg";
import psychic from "../icons/psychic.svg";
import rock from "../icons/rock.svg";
import steel from "../icons/steel.svg";
import water from "../icons/ground.svg";
import trash from "../icons/trash.svg"
export const types = {
  bug: [bug, 'bug'],
  dark: [dark, 'dark'],
  dragon: [dragon, 'dragon'],
  electric: [electric, 'electric'],
  fairy: [fairy, 'fairy'],
  fighting: [fighting, 'fighting'],
  fire: [fire, 'fire'],
  flying: [flying, 'flying'],
  ghost: [ghost, 'ghost'],
  grass: [grass, 'grass'],
  ground: [ground, 'ground'],
  ice: [ice, 'ice'],
  normal: [normal, 'normal'],
  poison: [poison, 'poison'],
  psychic: [psychic, 'psychic'],
  rock: [rock, 'rock'],
  steel: [steel, 'steel'],
  water: [water, 'water'],
  trash:trash
};

  export const selectType = (type) => {
    if (types.hasOwnProperty(type)) {
      return types[type];
    }
  };
