"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const services = [
  {
    image: "/images/services/cameras.jpg",
    title: "Câmeras de Segurança",
    description: "Sistemas CFTV com monitoramento em tempo real e acesso remoto pelo celular.",
    features: ["Acesso pelo celular", "Gravação 24h", "Alta definição"],
  },
  {
    image: "/images/services/facial.jpg",
    title: "Reconhecimento Facial",
    description: "Tecnologia moderna para liberação de acesso sem contato físico.",
    features: ["Sem contato", "Alta segurança", "Liberação rápida"],
  },
  {
    image: "/images/services/portao.jpg",
    title: "Portões Automáticos",
    description: "Automatização de portões com segurança e praticidade.",
    features: ["Abertura rápida", "Menos desgaste", "Controle remoto"],
  },
  {
    image: "/images/services/cancela.jpg",
    title: "Cancelas Automáticas",
    description: "Controle de acesso veicular para maior organização.",
    features: ["Controle de fluxo", "Organização", "Segurança"],
  },
  {
    image: "/images/services/tag.jpg",
    title: "Tag Veicular",
    description: "Liberação automática de veículos com praticidade.",
    features: ["Acesso rápido", "Sem parar", "Comodidade"],
  },
  {
    image: "/images/services/interfones.jpg",
    title: "Interfones",
    description: "Comunicação eficiente entre portaria e moradores.",
    features: ["Comunicação clara", "Integração", "Praticidade"],
  },
  {
    image: "/images/services/antena.jpg",
    title: "Antenas Coletivas",
    description: "Distribuição de sinal de qualidade para todo o condomínio.",
    features: ["Sinal estável", "Qualidade HD", "Solução coletiva"],
  },
  {
    image: "/images/services/eletroima.jpg",
    title: "Eletroímãs",
    description: "Fechaduras eletromagnéticas de alta resistência.",
    features: ["Alta resistência", "Liberação remota", "Durabilidade"],
  },
  {
    image: "/images/services/fechaduras.jpg",
    title: "Fechaduras Elétricas",
    description: "Controle de acesso integrado para portas e portões.",
    features: ["Integração", "Fácil instalação", "Confiabilidade"],
  },
  {
    image: "/images/services/fibra.jpg",
    title: "Fibra Óptica",
    description: "Infraestrutura profissional para sistemas de segurança.",
    features: ["Alta velocidade", "Estabilidade", "Profissional"],
  },
]

export function Services() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
              Nossos Serviços
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1]">
              Soluções completas em 
              <span className="text-accent"> segurança</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
            Instalação e manutenção especializada para condomínios em toda São Paulo.
          </p>
        </div>
        
        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="group relative h-full">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                    {/* Image */}
                    <div className="relative w-full overflow-hidden h-60">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-muted-foreground text-base leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span 
                            key={feature} 
                            className="inline-flex items-center px-3 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-auto">
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-base font-bold rounded-xl group/btn">
                          <a 
                            href={`https://wa.me/551152419494?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20${encodeURIComponent(service.title)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Solicitar orçamento
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all" />
            <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-2 border-accent/20 hover:border-accent hover:bg-accent hover:text-white transition-all" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
