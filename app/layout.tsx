import { Montserrat } from '@next/font/google'
import './globals.css'
import "toastify-js/src/toastify.css"

const montserrat = Montserrat({
  subsets: ['latin'],
})

console.log(montserrat)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
            <head />
            <body className={`font-my`}>{children}</body>
        </html>
    )
}
