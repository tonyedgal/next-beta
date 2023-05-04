import Header from "./Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>SpaceMan</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
