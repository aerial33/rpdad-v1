import type { Metadata } from "next";
import { Lexend_Deca, Nunito } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RPDAD | Réseau Public Départemental d’Aide à Domicile de la Gironde",
  description:
    "Le Réseau Public Départemental d'Aide à Domicile  (RPDAD) de la Gironde accompagne les personnes âgées et personnes en situation de handicap qui choisissent de vivre à domicile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${lexendDeca.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
