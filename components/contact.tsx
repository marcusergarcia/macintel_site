"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const contactInfo = [
  {
    icon: MapPin,
    title: "Localização",
    description: "São Paulo, SP",
    detail: "Atendemos toda a cidade",
  },
  {
    icon: Phone,
    title: "Telefone",
    description: "(11) 4118-9314",
    detail: "WhatsApp disponível",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "contato@macintel.com.br",
    detail: "Respondemos rapidamente",
  },
  {
    icon: Clock,
    title: "Horário",
    description: "Seg - Sex: 8h às 18h",
    detail: "Sáb: 8h às 12h",
  },
]

const servicesOptions = [
  "Câmeras de Segurança",
  "Controle de Acesso",
  "Portões Automáticos",
  "Interfones",
  "Antenas Coletivas",
  "Catracas",
  "Reconhecimento Facial",
  "Tag Veicular",
  "Fibra Óptica",
  "Sistema CondFy",
  "Manutenção Preventiva",
  "Outro",
]

export function Contact() {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [servico, setServico] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá! Meu nome é ${nome}, telefone ${telefone}. Gostaria de um orçamento para: ${servico}.`
    window.open(`https://wa.me/551152419494?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contato" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
            Contato
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1]">
            Solicite um
            <span className="text-accent"> orçamento</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fale com nossa equipe e encontre a melhor solução para o seu condomínio.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Preencha seus dados</h3>
                  <p className="text-muted-foreground">Retornamos em até 1 hora</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-base font-semibold">Nome</Label>
                    <Input 
                      id="nome" 
                      placeholder="Seu nome completo" 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      required
                      className="h-14 text-base px-5 rounded-xl border-gray-200 focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-base font-semibold">Telefone</Label>
                    <Input 
                      id="telefone" 
                      placeholder="(11) 99999-9999" 
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      required
                      className="h-14 text-base px-5 rounded-xl border-gray-200 focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="servico" className="text-base font-semibold">Serviço desejado</Label>
                  <Select value={servico} onValueChange={setServico} required>
                    <SelectTrigger className="h-14 text-base px-5 rounded-xl border-gray-200 focus:border-accent focus:ring-accent">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {servicesOptions.map((option) => (
                        <SelectItem key={option} value={option} className="text-base py-3">
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white h-14 text-base font-bold rounded-xl mt-4 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar solicitação via WhatsApp
                </Button>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div 
                key={info.title} 
                className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
                  <p className="text-base text-foreground mt-1">{info.description}</p>
                  <p className="text-sm text-muted-foreground mt-1">{info.detail}</p>
                </div>
              </div>
            ))}
            
            {/* Direct WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-accent text-white">
              <h3 className="text-lg font-bold">Prefere falar direto?</h3>
              <p className="text-white/80 mt-1">Clique e converse agora</p>
              <Button asChild variant="secondary" className="mt-4 w-full h-12 font-bold rounded-xl">
                <a href="https://wa.me/551141189314" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Abrir WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
