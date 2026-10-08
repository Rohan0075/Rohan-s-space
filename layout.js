import "./globals.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Rohan Simkhada",
  description:
    "Electrical Engineering graduate from Kathmandu, Nepal. Projects, books, movies and writing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="page py-10 text-sm" style={{ color: "var(--muted)" }}>
          &copy; {new Date().getFullYear()} Rohan Simkhada
        </footer>
      </body>
    </html>
  );
}
