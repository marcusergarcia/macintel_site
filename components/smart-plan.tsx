"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Phone, 
  CheckCircle, 
  Gift,
  Shield,
  Wrench,
  Sparkles,
  Car,
  ScanFace
} from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const benefits = [
  {
    icon: Gift,
    text: "Sem investimento inicial alto",
  },
  {
    icon: Wrench,
    text: "Manutenção preventiva garantida",
  },
  {
    icon: Sparkles,
    text: "Tecnologia sempre atualizada",
  },
  {
    icon: Shield,
    text: "Equipamentos inclusos no contrato",
  },
  {
    icon: CheckCircle,
    text: "Propriedade dos equipamentos ao renovar",
  },
]

const facialImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IDFACE_1.PNG-EX6LJuMcbFdynejJzVsj8RRf82fSfD.png",
    alt: "Terminal de Reconhecimento Facial com tecnologia avançada",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IDFACE_2.PNG-ZHqN9vm9BTeq1kbjmKZqbtpfuzo3y4.png",
    alt: "Kit Terminal de Reconhecimento Facial Control ID",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IDFACE_3.PNG-dW26zvUsjZ5gSnQg9kaIehaWnd7FlX.png",
    alt: "Reconhecimento Facial em ação",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IDFACE_4.PNG-KrZYakc4DRZqFLyg1c3VxdCdiq2Dsj.png",
    alt: "Terminal IDFace com identificação biométrica",
  },
]

const tagImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TAG_1.PNG-qyLLAAZf2rIFoxIXTLbpIJcADSb3oW.png",
    alt: "Tag Veicular abrindo portão automaticamente",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TAG_2.PNG-vxfvsPz59D9vs1yf7okwnjv346a2AJ.png",
    alt: "Sistema de Tag Veicular com cancela",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TAG_3.PNG-UjyiNcj0vsX1NWSj6SFKS9O3PpGbfl.png",
    alt: "Tag Veicular - visão do motorista",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tAG_4.PNG-ARIeM2qKsi0k42CfhgO7emJeaGsfKu.png",
    alt: "Kit iDUHF Control ID para Tag Veicular",
  },
]

function ImageCarousel({ images, title, icon: Icon }: { images: typeof facialImages, title: string, icon: React.ElementType }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
        <h4 className="text-lg font-bold text-white">{title}</h4>
      </div>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 h-8 w-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
        <CarouselNext className="right-2 h-8 w-8 bg-white/10 border-white/20 text-white hover:bg-white/20" />
      </Carousel>
    </div>
  )
}

export function SmartPlan() {
  return (
    <section id="plano-inteligente" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-5 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Oferta Exclusiva</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.05] text-balance">
            <span className="text-emerald-400">Plano Inteligente</span>
            <span className="block text-white mt-2 text-2xl sm:text-3xl lg:text-4xl">para Condomínios</span>
          </h2>
          
          <p className="mt-8 text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Tecnologia de ponta + manutenção preventiva + equipamentos em comodato. 
            <strong className="text-white"> Ao final do contrato, os equipamentos passam a ser do condomínio.</strong>
          </p>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10 sm:mb-16">
          {/* Left - Benefits Card */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl sm:rounded-3xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Como Funciona</h3>
                  <p className="text-white/60">Contrato de 24 parcelas</p>
                </div>
              </div>
              
              <div className="space-y-6 mb-10">
                <div className="relative pl-8 border-l-2 border-emerald-500/30">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 border-4 border-[#161b22]" />
                  <h4 className="font-bold text-white mb-1">Contrato Iniciado</h4>
                  <p className="text-white/60 text-sm">Equipamentos fornecidos em comodato + manutenção preventiva + sistema CondFy integrado</p>
                </div>
                <div className="relative pl-8 border-l-2 border-emerald-500/30">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#161b22]" />
                  <h4 className="font-bold text-white mb-1">Durante o Contrato</h4>
                  <p className="text-white/60 text-sm">Suporte técnico, manutenção garantida e tecnologia sempre atualizada</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#161b22]" />
                  <h4 className="font-bold text-white mb-1">Na Renovação (24 parcelas)</h4>
                  <p className="text-white/60 text-sm">Tag Veicular e/ou Terminal de Reconhecimento Facial passam a ser propriedade do condomínio</p>
                </div>
              </div>
              
              <div className="bg-emerald-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <h4 className="font-bold text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Benefícios Inclusos
                </h4>
                <div className="grid gap-3">
                  {benefits.map((benefit) => (
                    <div key={benefit.text} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                        <benefit.icon className="h-4 w-4 text-emerald-400" />
                      </div>
                      <span className="text-white/90 text-sm">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Product Images */}
          <div className="space-y-8 order-1 lg:order-2">
            <ImageCarousel 
              images={facialImages} 
              title="Reconhecimento Facial" 
              icon={ScanFace}
            />
            <ImageCarousel 
              images={tagImages} 
              title="Tag Veicular" 
              icon={Car}
            />
          </div>
        </div>
        
        {/* Impact phrase */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight text-balance">
            Mais segurança, menos custo inicial e 
            <span className="text-emerald-400"> tecnologia que vira patrimônio</span> do condomínio.
          </p>
        </div>
        
        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white h-14 sm:h-16 px-6 sm:px-10 text-base sm:text-lg font-bold rounded-xl shadow-xl shadow-emerald-500/20">
            <a 
              href="https://wa.me/551152419494?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20o%20Plano%20Inteligente%20com%20comodato."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Phone className="mr-2 sm:mr-3 h-5 w-5 shrink-0" />
              <span>Solicitar Orçamento</span>
              <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 shrink-0" />
            </a>
          </Button>
          <p className="text-white/50 text-sm">
            Resposta em até 24h
          </p>
        </div>
      </div>
    </section>
  )
}
