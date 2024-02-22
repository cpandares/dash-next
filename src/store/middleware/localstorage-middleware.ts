import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";



export const localStorageMiddleware = ( state: MiddlewareAPI )=>{

    return ( next: Dispatch ) => ( action: Action ) =>{
        next(action)
        console.log(action)
        if(action.type === 'pokemons/toggleFavorite'){
            localStorage.setItem('pokemons', JSON.stringify(state.getState().pokemons))
        }
    }

}