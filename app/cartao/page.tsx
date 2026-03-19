"use client"

import { useState } from "react"
import { 
  MessageCircle, 
  Phone, 
  Download, 
  Share2, 
  Mail, 
  MapPin, 
  Globe, 
  Check,
  X,
  Instagram
} from "lucide-react"

const services = [
  "Câmeras de Segurança",
  "Reconhecimento Facial",
  "Tag Veicular",
  "Portões Automáticos",
  "Cancelas Automáticas",
  "Controle de Acesso",
  "Interfones",
  "Antenas Coletivas",
  "Eletroímãs",
  "Fechaduras Elétricas",
  "Fibra Óptica",
  "Sistema CondFy",
]

export default function CartaoDigital() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [showShareModal, setShowShareModal] = useState(false)

  const showNotification = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Macintel Segurança Eletrônica
ORG:Macintel
TEL;TYPE=WORK,VOICE:+551152419494
TEL;TYPE=CELL:+551141189314
EMAIL:contato@macintel.com.br
URL:https://www.macintel.com.br
ADR;TYPE=WORK:;;São Paulo;SP;;Brasil
NOTE:Segurança eletrônica para condomínios - Instalação, Manutenção e Gestão via CondFy
END:VCARD`

    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Macintel_Contato.vcf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    showNotification("Contato salvo com sucesso!")
  }

  const handleShare = async () => {
    const shareData = {
      title: "Macintel Segurança Eletrônica",
      text: "Conheça a Macintel - Segurança eletrônica para condomínios em São Paulo. Instalação, manutenção e gestão via CondFy.",
      url: "https://www.macintel.com.br/cartao",
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
        showNotification("Compartilhado com sucesso!")
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setShowShareModal(true)
        }
      }
    } else {
      setShowShareModal(true)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://www.macintel.com.br/cartao")
    showNotification("Link copiado!")
    setShowShareModal(false)
  }

  return (
    <div className="min-h-screen bg-[#0d0d1a] flex items-center justify-center md:py-8">
      <div className="w-full max-w-[430px] min-h-screen md:min-h-0 md:rounded-[2.5rem] md:shadow-2xl md:shadow-black/50 bg-gradient-to-br from-[#1a1a2e] via-[#2b2d70] to-[#1a1a2e] flex flex-col md:overflow-hidden">
      {/* Toast Notification */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          showToast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white text-foreground px-6 py-3 rounded-full shadow-xl flex items-center gap-3">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-white" />
          </div>
          <span className="font-medium">{toastMessage}</span>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground">Compartilhar</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Copie o link do cartão digital para compartilhar:
            </p>
            <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-3 mb-4">
              <span className="text-sm text-foreground truncate flex-1">
                macintel.com.br/cartao
              </span>
              <button
                onClick={copyToClipboard}
                className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
              >
                Copiar
              </button>
            </div>
            <div className="flex gap-3">
              <a
                href="https://wa.me/?text=Conhe%C3%A7a%20a%20Macintel%20-%20Seguran%C3%A7a%20eletr%C3%B4nica%20para%20condom%C3%ADnios%20em%20S%C3%A3o%20Paulo.%20https%3A%2F%2Fwww.macintel.com.br%2Fcartao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white py-3 rounded-xl text-center font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:?subject=Macintel%20Seguran%C3%A7a%20Eletr%C3%B4nica&body=Conhe%C3%A7a%20a%20Macintel%20-%20Seguran%C3%A7a%20eletr%C3%B4nica%20para%20condom%C3%ADnios%20em%20S%C3%A3o%20Paulo.%0A%0Ahttps%3A%2F%2Fwww.macintel.com.br%2Fcartao"
                className="flex-1 bg-blue-500 text-white py-3 rounded-xl text-center font-medium hover:bg-blue-600 transition-colors"
              >
                E-mail
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative px-6 pt-8 pb-12">
        {/* Share Button */}
        <button
          onClick={handleShare}
          className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <Share2 className="w-5 h-5 text-white" />
        </button>

        {/* Logo and Company Info */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2 mb-4">
            <div className="w-full h-full bg-[#2b2d70] rounded-xl flex items-center justify-center">
              <span className="text-white text-4xl font-black">M</span>
            </div>
          </div>
          <h1 className="text-2xl font-black text-white tracking-wide">MACINTEL</h1>
          <p className="text-accent text-sm font-medium mt-1">Segurança Eletrônica</p>
          <div className="flex items-center gap-1.5 mt-3 text-white/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>São Paulo - SP</span>
          </div>
        </div>
      </div>

      {/* Main Card Section */}
      <div className="bg-white rounded-t-[2rem] px-5 pt-6 pb-8">
        {/* Tagline */}
        <p className="text-center text-sm font-semibold text-muted-foreground mb-6">
          Instalação + Tecnologia + Gestão
        </p>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          {/* WhatsApp - Fale Conosco */}
          <a
            href="https://wa.me/551141189314?text=Ol%C3%A1%2C%20vim%20pelo%20cart%C3%A3o%20digital!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wide">WhatsApp</p>
              <p className="text-base font-bold">(11) 4118-9314</p>
            </div>
          </a>

          {/* WhatsApp - Orçamento */}
          <a
            href="https://wa.me/551152419494?text=Ol%C3%A1%2C%20vim%20pelo%20cart%C3%A3o%20digital%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-teal-500 hover:bg-teal-600 text-white p-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-teal-500/20"
          >
            <Phone className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Solicitar Orçamento</p>
              <p className="text-base font-bold">WhatsApp (11) 5241-9494</p>
            </div>
          </a>

          {/* E-mail */}
          <a
            href="mailto:contato@macintel.com.br"
            className="flex items-center gap-4 w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-orange-500/20"
          >
            <Mail className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wide">E-mail</p>
              <p className="text-base font-bold">contato@macintel.com.br</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/macintel.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-purple-500/20"
          >
            <Instagram className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Instagram</p>
              <p className="text-base font-bold">@macintel.com.br</p>
            </div>
          </a>

          {/* Website */}
          <a
            href="https://www.macintel.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 w-full bg-[#1a1a2e] hover:bg-[#2b2d70] text-white p-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[#1a1a2e]/30"
          >
            <Globe className="w-6 h-6" />
            <div className="text-left">
              <p className="text-xs font-medium text-white/80 uppercase tracking-wide">Website</p>
              <p className="text-base font-bold">www.macintel.com.br</p>
            </div>
          </a>
        </div>

        {/* Services Section */}
        <div className="mb-6">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4 text-center">
            Nossos Serviços
          </p>
          <div className="grid grid-cols-2 gap-2">
            {services.map((service) => (
              <span
                key={service}
                className="bg-gray-100 text-foreground text-xs font-medium px-3 py-2.5 rounded-xl text-center"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Save Contact Button */}
        <button
          onClick={handleSaveContact}
          className="flex items-center justify-center gap-2 w-full bg-[#1a1a2e] hover:bg-[#2b2d70] text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg"
        >
          <Download className="w-5 h-5" />
          <span>Salvar Contato</span>
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          © 2026 Macintel. Todos os direitos reservados.
        </p>
      </div>
      </div>
    </div>
  )
}
