import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Cartão Digital | Macintel Segurança Eletrônica",
  description: "Cartão digital da Macintel - Segurança eletrônica para condomínios em São Paulo. Entre em contato pelo WhatsApp ou telefone.",
  keywords: "cartão digital, macintel, segurança eletrônica, condomínios, são paulo, contato",
  openGraph: {
    title: "Macintel Segurança Eletrônica",
    description: "Segurança eletrônica para condomínios em São Paulo - Instalação, Manutenção e Gestão via CondFy",
    url: "https://www.macintel.com.br/cartao",
    siteName: "Macintel",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function CartaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
