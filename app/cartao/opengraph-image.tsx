import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Macintel Segurança Eletrônica - Cartão Digital"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2b2d70 50%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 140,
            height: 140,
            background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            border: "4px solid rgba(255,255,255,0.2)",
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 700,
              color: "white",
            }}
          >
            M
          </span>
        </div>

        {/* Company Name */}
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            margin: 0,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          MACINTEL
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 32,
            color: "#a78bfa",
            margin: 0,
            marginBottom: 48,
            fontWeight: 500,
          }}
        >
          Segurança Eletrônica
        </p>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            background: "rgba(255,255,255,0.1)",
            padding: "16px 32px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.9)",
              fontWeight: 500,
            }}
          >
            Instalação + Tecnologia + Gestão
          </span>
        </div>

        {/* Location */}
        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
            marginTop: 32,
          }}
        >
          São Paulo - SP
        </p>

        {/* Contact CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: 40,
          }}
        >
          <div
            style={{
              background: "#22c55e",
              padding: "12px 24px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18, color: "white", fontWeight: 600 }}>
              WhatsApp: (11) 4118-9314
            </span>
          </div>
          <div
            style={{
              background: "#3b82f6",
              padding: "12px 24px",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18, color: "white", fontWeight: 600 }}>
              Orçamento: (11) 5241-9494
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
