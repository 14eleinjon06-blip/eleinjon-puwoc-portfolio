import "./globals.css";

export const metadata = {
  title: "Eleinjon D. Puwoc | IT Student Portfolio",
  description: "Personal portfolio of Eleinjon D. Puwoc, a BS Information Technology student at Nueva Vizcaya State University."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
