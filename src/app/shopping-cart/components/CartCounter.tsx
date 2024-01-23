"use client";
import { useState } from 'react'

interface Props {
    value?: number
}

export const CartCounter = ({ value = 0}:Props) => {
    const [counter, setCounter] = useState(value)
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex">
                <button
                    onClick={() => setCounter(counter + 1)}
                    className="flex items-center justify-center p-2 bg-gray-800 text-white hover:bg-gray-400 transition-all w-[100px] mr-2 rounded-xl" >
                    + 1
                </button>
                <button
                    onClick={() => setCounter(counter - 1)}
                    className="flex items-center justify-center p-2 bg-gray-800 text-white hover:bg-gray-400 transition-all w-[100px] mr-2 rounded-xl" >
                    - 1
                </button>
            </div>
        </>
    )
}
