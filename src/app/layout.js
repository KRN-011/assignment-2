import "./globals.css";

export const metadata = {
  title: "Game List",
  description: "List of games from API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
