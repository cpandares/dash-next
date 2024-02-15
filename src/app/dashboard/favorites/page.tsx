
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";




export const metadata = {
 title: 'Favoritos',
 description: 'Pokemons favoritos de los usuarios',
};

export default async function PokemonsPage() {

 
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de Pokemons <small className="text-red-500">Favorits</small></span>
      
       <PokemonGrid pokemons={[]} />
       
     
    </div>
  );
}