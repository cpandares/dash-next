
"use client"
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store";

import { PokemonGrid } from "../"
import { IoHeartOutline } from "react-icons/io5";


export const FavoritesPokemons = () => {

  
  const pokemons = useAppSelector(state => Object.values(state.pokemons.favorites));

  const [pokemonsFav, setPokemonsFav] = useState(pokemons);

/*   useEffect(() =>{
    setPokemonsFav(pokemons);
  
  },[pokemons]) */

  return (
   <>
     {/* <PokemonGrid pokemons={pokemonsFav} /> */}
     {
        pokemons.length > 0 ? <PokemonGrid pokemons={pokemons} /> : <NoFavorites />
     }
      {/* <NoFavorites /> */}
   </>
  )
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline className="text-red-500"  size={100} />
      <span className="text-3xl text-red-500">No hay pokemons favoritos</span>
    </div>
  )
}
