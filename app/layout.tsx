import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Esto es la Cabecera de mi aplicacion web (<head></head>)
export const metadata: Metadata = {
  title: "Marco's Home Page",
  description: "Generated with love by Vercel",
};

// export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
