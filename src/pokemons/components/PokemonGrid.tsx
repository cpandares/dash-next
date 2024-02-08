import { SimplePokemon } from ".."
import { PokemonCard } from "./PokemonCard"


interface Props {
  pokemons: SimplePokemon[]
}


export const metadata = {
 title: 'Listado de pokemons',
 description: 'Listado de pokemons en una grilla',
};


export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.map( pokemon => (
          
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }

    </div>
  )
}
