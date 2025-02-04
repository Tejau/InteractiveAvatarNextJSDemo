export const metadata = {
  title: 'Dr. Seema Negi Principal Sanjeevani World School',
  description: 'Dr. Seema Negi is the Director and Principal, Sanjeevani World School, Mumbai. She strongly believes in Empathy & Gratitude.',
  icons: {
    icon: '/favicon.ico', // Correct favicon path
  },
  openGraph: {
    title: 'Dr. Seema Negi - Principal Sanjeevani World School',
    description: 'Dr. Seema Negi is the Director and Principal of Sanjeevani World School, Mumbai. She strongly believes in Empathy & Gratitude.',
    url: 'https://drseemanegi.com', // Replace with your actual domain
    siteName: 'Sanjeevani World School',
    images: [
      {
        url: '/favicon.jpeg', // Use a proper OG image
        width: 1200,
        height: 630,
        alt: 'Dr. Seema Negi - Principal Sanjeevani World School',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:image" content="/favicon.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
