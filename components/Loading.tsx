'use client'
import React from 'react'
import ClipLoader from 'react-spinners/BarLoader'

export default function Loading() {
    return (
        <div
            className={
                'w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-opacity-60 bg-white'
            }>
            <ClipLoader loading={true} color={'#00ADB5'} />
        </div>
    )
}
