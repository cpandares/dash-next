import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    favorites:{ [key: string]: SimplePokemon },
}


const getInitialState = () => {
    /* const favorites = localStorage.getItem('favorites');
    if(favorites) {
        return JSON.parse(favorites);
    }
    return {}; */

}

const initialState:PokemonsState = {
    favorites:{}
    
} 


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavorite(state, action:PayloadAction<{[key: string]: SimplePokemon}>) {
        state.favorites = action.payload;
    },
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        if(state.favorites[pokemon.id]) {
            delete state.favorites[pokemon.id];
        } else {
            state.favorites[pokemon.id] = pokemon;
           
        }
        //No es una buena practica guardar en el localstorage en cada cambio en redux 
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
   
  }
});

export const { toggleFavorite,setFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer