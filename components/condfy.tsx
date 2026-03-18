"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Smartphone, 
  History, 
  Users, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Phone
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Controle em tempo real",
    description: "Monitore todos os acessos do condomínio diretamente pelo celular ou computador.",
  },
  {
    icon: History,
    title: "Histórico de entradas",
    description: "Registro completo de todas as entradas e saídas com data, hora e identificação.",
  },
  {
    icon: Users,
    title: "Integração completa",
    description: "Conecta reconhecimento facial, tags veiculares e controle de pedestres em um só lugar.",
  },
  {
    icon: Shield,
    title: "Segurança avançada",
    description: "Dados criptografados e backup automático para máxima proteção das informações.",
  },
]

const benefits = [
  "Gestão centralizada de todos os acessos",
  "Relatórios detalhados para o síndico",
  "Cadastro rápido de moradores e visitantes",
  "Integração com portaria remota",
  "Suporte técnico especializado",
  "Atualizações contínuas do sistema",
]

export function CondFy() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play()
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="condfy" className="py-24 lg:py-32 bg-gradient-to-br from-[#1a1a2e] via-[#2b2d70] to-[#1a1a2e] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-5 py-2 mb-8">
            <Smartphone className="h-5 w-5 text-blue-400" />
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">Sistema Personalizado</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05]">
            <span className="text-blue-400">CondFy</span>
            <span className="block text-white mt-2">Sistema de Controle de Acesso</span>
          </h2>
          
          <p className="mt-8 text-xl text-white/80 leading-relaxed">
            Sistema inteligente para gestão completa de acessos em condomínios na cidade de São Paulo - SP. 
            Tecnologia avançada para mais controle, praticidade e segurança no dia a dia.
          </p>
        </div>
        
        {/* Video Showcase */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl p-4 border border-white/10">
              <video 
                ref={videoRef}
                muted 
                playsInline
                controls
                className="w-full rounded-2xl shadow-2xl"
              >
                <source src="/videos/condfy-app.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
              <p className="text-center text-white/60 text-sm mt-4">Demonstração do aplicativo CondFy</p>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 mb-6 group-hover:bg-blue-500/30 transition-colors">
                <feature.icon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Benefits and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8">Benefícios do CondFy</h3>
            <div className="grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-lg text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 lg:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 mb-8">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4">
                Gestão de Tecnologia
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Instalação + tecnologia + gestão em um só lugar. 
                O CondFy é a solução completa para seu condomínio.
              </p>
              
              <Button asChild size="lg" className="w-full bg-white hover:bg-white/90 text-blue-700 h-16 text-lg font-bold rounded-xl shadow-xl">
                <a 
                  href="https://wa.me/551152419494?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20o%20sistema%20CondFy."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Solicitar orçamento CondFy
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
