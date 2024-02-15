'use client';

import {  IoCartOutline } from 'react-icons/io5'
import { SimpleWidget } from '../'
import { useAppSelector } from '@/store'

export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">         
        <SimpleWidget 
            title={count.toString()} 
            subtitle={`Productos en el carrito ${count}`} 
            icon={<IoCartOutline size={50} />} 
            label = "Contador de productos en el carrito"
            href="counter"
        />          
    </div>
  )
}
