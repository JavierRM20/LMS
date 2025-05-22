import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Pagina de inicio",
  description: "Pagina que va a mostrar el contenido de la app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <div className="min-h-scren flex flex-col">
      <Header />
      <main>{children}</main>
    </div>
    </ClerkProvider>
  );
}
