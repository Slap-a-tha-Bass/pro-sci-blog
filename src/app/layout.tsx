import './globals.css'

export const metadata = {
  title: "Pro-SCI - Blog",
  description:
    "Blog for the Pro-SCI research project",
  authors: [
    {
      name: "Dr. Ceren Yarar-Fisher",
      url: "https://twitter.com/DrYararFisher",
    },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  google: {
    notranslate: true,
    contentLanguage: "en_US",
    nositelinkssearchbox: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
