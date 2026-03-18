"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551141189314?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors hover:scale-110 transform duration-200"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
