import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Importar Tailwind CSS aquí

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClientesFeliz",
  description: "Manage your clients with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
