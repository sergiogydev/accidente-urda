import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfoTren — Información y ayuda ferroviaria",
  description: "Teléfonos de asistencia y fuentes oficiales para afectados y familiares del accidente ferroviario de Urda. Iniciativa ciudadana independiente.",
  icons: { icon: "/icon.svg" },
  referrer: "no-referrer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
