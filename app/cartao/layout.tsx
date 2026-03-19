import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.macintel.com.br"),
  title: "Cartão Digital | Macintel Segurança Eletrônica",
  description: "Cartão digital da Macintel - Segurança eletrônica para condomínios em São Paulo. Entre em contato pelo WhatsApp ou telefone.",
  keywords: "cartão digital, macintel, segurança eletrônica, condomínios, são paulo, contato",
  openGraph: {
    title: "Macintel Segurança Eletrônica",
    description: "Segurança eletrônica para condomínios em São Paulo - Instalação, Manutenção e Gestão via CondFy",
    url: "https://www.macintel.com.br/cartao",
    siteName: "Macintel",
    type: "website",
    images: [
      {
        url: "/og-cartao.jpg",
        width: 1200,
        height: 630,
        alt: "Macintel Segurança Eletrônica - Cartão Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Macintel Segurança Eletrônica",
    description: "Segurança eletrônica para condomínios em São Paulo",
    images: ["/og-cartao.jpg"],
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
