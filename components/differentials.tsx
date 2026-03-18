import { Wrench, Shield, Cpu, CheckCircle, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description: "Equipe técnica especializada para instalação de todos os sistemas.",
    color: "bg-blue-500",
  },
  {
    icon: Shield,
    title: "Manutenção Preventiva",
    description: "Contratos para garantir funcionamento contínuo dos equipamentos.",
    color: "bg-emerald-500",
  },
  {
    icon: Cpu,
    title: "Tecnologia Avançada",
    description: "Sistemas modernos como CondFy para gestão completa de acessos.",
    color: "bg-violet-500",
  },
  {
    icon: CheckCircle,
    title: "Solução Completa",
    description: "Do planejamento à execução, cuidamos de tudo para seu condomínio.",
    color: "bg-amber-500",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32 bg-[#1a1a2e] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">
              Por que escolher a Macintel
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1]">
              Solução completa para seu 
              <span className="text-blue-400"> condomínio</span>
            </h2>
            <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-lg">
              Combinamos instalação profissional, manutenção especializada e tecnologia 
              avançada para oferecer segurança completa. Utilizamos sistemas modernos como 
              o <strong className="text-blue-400">CondFy</strong> para garantir mais controle, praticidade e segurança no dia a dia.
            </p>
            
            <div className="mt-12 grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group flex gap-5 p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    <p className="mt-1 text-base text-white/60">{feature.description}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Card */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 p-10 lg:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-blue-500/20 mb-8">
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
                
                <p className="text-7xl lg:text-8xl font-black text-white">500<span className="text-blue-400">+</span></p>
                <p className="mt-4 text-2xl text-white/90 font-semibold">Condomínios atendidos</p>
                <p className="mt-2 text-lg text-white/60">em São Paulo - SP</p>
                
                <div className="mt-10 pt-10 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: "15+", label: "Anos" },
                      { value: "24h", label: "Atendimento" },
                      { value: "100%", label: "Qualidade" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-white/50">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button asChild className="mt-10 w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-base font-bold rounded-xl">
                  <a href="https://wa.me/551141189314?text=Ola!%20Gostaria%20de%20falar%20com%20um%20especialista." target="_blank" rel="noopener noreferrer">
                    Falar com especialista
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
