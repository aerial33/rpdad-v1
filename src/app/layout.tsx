import type { Metadata } from "next"
import { Lexend_Deca, Nunito } from "next/font/google"

import { Footer } from "@/layout/footer"
import { Header } from "@/layout/header/header"

import "./globals.css"

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "RPDAD | Réseau Public Départemental d’Aide à Domicile de la Gironde",
  description:
    "Le Réseau Public Départemental d'Aide à Domicile  (RPDAD) de la Gironde accompagne les personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body
        className={`${lexendDeca.variable} ${nunito.variable} bg-flamingo-lightest flex min-h-screen flex-col antialiased`}
      >
        <Header navbarVariant="medium" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
