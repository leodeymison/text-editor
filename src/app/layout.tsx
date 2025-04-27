import "./globals.css";
import "react-toastify/ReactToastify.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head></head>
      <body className="bg-bg-primary">{children}</body>
    </html>
  );
}
