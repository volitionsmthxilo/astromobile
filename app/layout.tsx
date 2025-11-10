import type React from "react";
import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // regular, medium, semibold, bold
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AstroMobile - Smartphones Built for Africa",
  description:
    "Affordable innovation, reliable performance, and flexible ownership through retail and Pay-As-You-Use options.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}





// import type React from "react"
// import type { Metadata } from "next"
// import { Inter, Space_Grotesk } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })
// const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

// export const metadata: Metadata = {
//   title: "AstroMobile - Smartphones Built for Africa",
//   description:
//     "Affordable innovation, reliable performance, and flexible ownership through retail and Pay-As-You-Use options.",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} ${spaceGrotesk.variable} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }
