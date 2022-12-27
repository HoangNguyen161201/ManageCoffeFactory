'use client'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useAppContext as UseAppContext  } from '../utils/context'

export default function btnSetDarkMode() {
    const { isDark, setIsDark } = UseAppContext()
    return (
        <>
            {isDark ? (
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="bg-white bg-opacity-5 transition duration-300 active:bg-gray-400 p-2 rounded-md">
                    <BsFillSunFill color="white" />
                </button>
            ) : (
                <button
                    onClick={() => setIsDark(!isDark)}
                    className="bg-gray-300 transition duration-300 active:bg-gray-400 p-2 rounded-md">
                    <BsFillMoonFill color="#838589" />
                </button>
            )}
        </>
    )
}
