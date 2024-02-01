// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Think Novus',
//   description: 'Created a most relatives websites.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }


///mono roboto and latin font below

// import type { Metadata } from 'next'

// import './globals.css'
// import { Inter, Roboto_Mono } from 'next/font/google'
 
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })
 
// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })
 

// export const metadata: Metadata = {
//   title: 'Think Novus',
//   description: 'Created a most relatives websites.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${roboto_mono.variable}`}>{children}</body>
//     </html>
//   )
// }

//roboto font below

import type { Metadata } from 'next'

import './globals.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400','700','500','900',],
  subsets: ['latin'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: 'Think Novus',
  description: 'Created a most relatives websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}