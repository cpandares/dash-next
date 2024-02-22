import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

interface PokemonsState {
    [key: string]: SimplePokemon;
}


const getInitialState = () => {
    const favorites = localStorage.getItem('favorites');
    if(favorites) {
        return JSON.parse(favorites);
    }
    return {};

}

const initialState:PokemonsState = {
    /* '1': {
        id: '1',
        name: 'bulbasaur',        
    },
    '2': {
        id: '2',
        name: 'ivysaur',        
    },
    '3': {
        id: '3',
        name: 'venusaur',        
    },
    '4': {
        id: '4',
        name: 'charmander',        
    }, */
    ...getInitialState()
} 


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
        const pokemon = action.payload;
        if(state[pokemon.id]) {
            delete state[pokemon.id];
        } else {
            state[pokemon.id] = pokemon;
           
        }
        //No es una buena practica guardar en el localstorage en cada cambio en redux 
        localStorage.setItem('favorites', JSON.stringify(state));
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer