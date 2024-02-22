
'use client';

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavorite } from "./pokemons/pokemons";


interface Props {
    children: React.ReactNode;
    
}

export const Providers = ({children}: Props) => {


  useEffect(()=>{
    const favorites = localStorage.getItem('favorites') ?? '{}';
   
    store.dispatch(setFavorite(JSON.parse(favorites)));
    
  
  },[])

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
