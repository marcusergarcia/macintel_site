"use client"

import { useState } from "react"
import { 
  MessageCircle, 
  Phone, 
  UserPlus, 
  Share2, 
  Mail, 
  MapPin, 
  Globe, 
  Shield, 
  Camera, 
  Key, 
  Smartphone,
  Check,
  X
} from "lucide-react"

const services = [
  { icon: Camera, label: "Câmeras de Segurança" },
  { icon: Key, label: "Controle de Acesso" },
  { icon: Smartphone, label: "Interfones" },
  { icon: Shield, label: "Reconhecimento Facial" },
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
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#2b2d70] to-[#1a1a2e] flex items-center justify-center p-4">
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

      {/* Card Container */}
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#2b2d70] px-6 pt-10 pb-16">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            {/* Logo */}
            <div className="relative flex justify-center">
              <div className="w-28 h-28 bg-white rounded-2xl shadow-xl flex items-center justify-center p-2">
                <img
                  src="/images/logo-quadrado.png"
                  alt="Macintel"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>
            
            {/* Company Name */}
            <div className="relative text-center mt-6">
              <h1 className="text-2xl font-black text-white">Macintel</h1>
              <p className="text-white/70 text-sm font-medium mt-1">
                Segurança Eletrônica para Condomínios
              </p>
            </div>
          </div>

          {/* Services Pills */}
          <div className="px-6 -mt-6 relative z-10">
            <div className="bg-gray-50 rounded-2xl p-4 shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <div
                    key={service.label}
                    className="flex items-center gap-2 bg-white rounded-xl px-3 py-2.5 shadow-sm"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-foreground leading-tight">
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="px-6 py-6 space-y-3">
            <a
              href="https://wa.me/551152419494"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp - Orçamento</p>
                <p className="text-base font-semibold text-foreground">(11) 5241-9494</p>
              </div>
            </a>

            <a
              href="https://wa.me/551141189314"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp - Fale Conosco</p>
                <p className="text-base font-semibold text-foreground">(11) 4118-9314</p>
              </div>
            </a>

            <a
              href="mailto:contato@macintel.com.br"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <p className="text-base font-semibold text-foreground">contato@macintel.com.br</p>
              </div>
            </a>

            <a
              href="https://www.macintel.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Site</p>
                <p className="text-base font-semibold text-foreground">www.macintel.com.br</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-3 rounded-xl">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Localização</p>
                <p className="text-base font-semibold text-foreground">São Paulo - SP</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="px-6 pb-6 grid grid-cols-2 gap-3">
            <a
              href="https://wa.me/551141189314?text=Ol%C3%A1%2C%20vim%20pelo%20cart%C3%A3o%20digital%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Fale Conosco</span>
            </a>

            <a
              href="https://wa.me/551152419494?text=Ol%C3%A1%2C%20vim%20pelo%20cart%C3%A3o%20digital%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-blue-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Orçamento</span>
            </a>

            <button
              onClick={handleSaveContact}
              className="flex items-center justify-center gap-2 bg-[#1a1a2e] hover:bg-[#2b2d70] text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-[#1a1a2e]/30"
            >
              <UserPlus className="w-5 h-5" />
              <span>Salvar Contato</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-[#4a4a9c] hover:opacity-90 text-white font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-accent/30"
            >
              <Share2 className="w-5 h-5" />
              <span>Compartilhar</span>
            </button>
          </div>

          {/* Footer Tagline */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4">
            <p className="text-center text-sm font-bold text-accent">
              Instalação + Tecnologia + Gestão
            </p>
            <p className="text-center text-xs text-muted-foreground mt-1">
              Mais de 15 anos de experiência em segurança eletrônica
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-white/60 hover:text-white text-sm transition-colors"
          >
            Visite nosso site completo
          </a>
        </div>
      </div>
    </div>
  )
}
