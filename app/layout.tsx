import "./globals.css";

export const metadata = {
  title: "CRM Dental",
  description: "Gestión integral de centros odontológicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}