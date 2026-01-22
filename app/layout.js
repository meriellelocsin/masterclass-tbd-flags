export const metadata = {
  title: 'TBD + Feature Flags Demo',
  description: 'Trunk-Based Development with Feature Flags',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
