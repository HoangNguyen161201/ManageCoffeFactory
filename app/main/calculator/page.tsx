'use client'

import React from 'react'
import { useAppContext } from "../../../utils/context";

export default function calculatorPage() {
  const {isDark} = useAppContext()
  return (
    <div className={isDark ? 'dark': ''}>page</div>
  )
}
