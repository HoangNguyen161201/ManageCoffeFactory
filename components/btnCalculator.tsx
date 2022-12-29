import React from 'react'

export default function btnCalculator({text, color= 'text-black', bg= 'bg-black bg-opacity-5'}: {
    text: string,
    color?: string,
    bg?: string
}) {
    return (
        <button className={`rounded-lg text-2xl font-semibold ${color} ${bg}`}>
            {text}
        </button>
    )
}
