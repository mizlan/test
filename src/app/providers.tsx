'use client'

import { ThemeProvider } from 'next-themes'
import { Provider as BalanceProvider } from 'react-wrap-balancer'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <BalanceProvider>
        {children}
      </BalanceProvider>
    </ThemeProvider>
  )
}
