'use client'

import { Montserrat } from '@next/font/google'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'toastify-js/src/toastify.css'
import { AppWrapper } from '../utils/context'
import './globals.css'

const montserrat = Montserrat({
    subsets: ['latin'],
})

console.log(montserrat)

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [queryClient] = useState(new QueryClient())
    return (
        <html lang="en">
            <head />
            <body className={`font-my w-full`}>
                <QueryClientProvider client={queryClient}>
                    <AppWrapper>
                        <div>{children}</div>
                    </AppWrapper>
                </QueryClientProvider>
            </body>
        </html>
    )
}
