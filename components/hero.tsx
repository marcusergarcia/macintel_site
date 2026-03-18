"use client"

import { Button } from "@/components/ui/button"
import { Phone, ArrowRight, Shield } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="absolute inset-0 bg-[url('/images/services/cameras.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 mb-8">
              <Shield className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white/90">
                Tecnologia + Segurança + Gestão em um só lugar
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Segurança
              <span className="block text-blue-400">Inteligente</span>
              <span className="block text-white/90">para Condomínios</span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-white/70 max-w-xl mx-auto lg:mx-0 sm:text-xl">
              Soluções completas em segurança eletrônica para condomínios em São Paulo.
              Instalação, manutenção e contratos preventivos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 lg:justify-start justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white w-full sm:w-auto h-14 px-8 text-base font-bold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all">
                <a href="https://wa.me/551152419494?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-white hover:bg-white/10 w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-full">
                <a href="#servicos">
                  Conhecer Serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Stats inline */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { value: "15+", label: "Anos" },
                { value: "500+", label: "Condomínios" },
                { value: "100%", label: "Satisfação" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/60 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-2xl" />

              {/* Main card */}
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 justify-items-center">
                  {[
                    { img: "/images/services/cameras.jpg", label: "Câmeras" },
                    { img: "/images/services/facial.jpg", label: "Reconhecimento" },
                    { img: "/images/services/portao.jpg", label: "Portões" },
                    { img: "/images/services/interfones.jpg", label: "Interfones" },
                  ].map((item, index) => (
                    <div key={item.label} className="relative rounded-2xl overflow-hidden group w-[140px] h-[140px]">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm font-bold text-white">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
                  Sao Paulo - SP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
