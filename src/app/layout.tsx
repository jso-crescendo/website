import './globals.css'

export const metadata = {
  title: 'JSO Crescendo',
  description: 'TODO make a description',
}

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
