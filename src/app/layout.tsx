import type { Metadata } from "next"
import "@/assets/globals.css"

export const metadata: Metadata = {
  title: "Business Skip Hire",
  description: "REMWaste test v1.0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-black font-satoshi text-base`}>{children}</body>
    </html>
  )
}
