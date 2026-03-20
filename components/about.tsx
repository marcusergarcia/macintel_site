import { CheckCircle } from "lucide-react"

const highlights = [
  "Instalação profissional",
  "Manutenção preventiva",
  "Gestão via CondFy",
  "Equipamentos de qualidade",
]

export function About() {
  return (
    <section id="sobre" className="py-16 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main logo container */}
              <div className="relative w-full aspect-square max-w-xs sm:max-w-md mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#1a1a2e] to-[#2b2d70] p-8 sm:p-12 flex items-center justify-center shadow-2xl">
                <img
                  src="/images/logo-quadrado.png"
                  alt="Macintel Logo"
                  className="w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gray-100">
                  <p className="text-3xl sm:text-5xl font-black text-accent">15<span className="text-xl sm:text-3xl">+</span></p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">Anos de experiência</p>
                </div>
              </div>
              
              {/* Decorative elements - hidden on mobile */}
              <div className="hidden sm:block absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-40 h-40 bg-gray-100 rounded-3xl -z-10" />
            </div>
          </div>
          
          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-accent font-bold text-sm uppercase tracking-widest mb-4">
              Sobre a Empresa
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.1]">
              Macintel
              <span className="block text-accent">Segurança Eletrônica</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              A Macintel é especializada em segurança eletrônica para condomínios na cidade de São Paulo - SP. 
              Atuamos com instalação, manutenção e implementação de sistemas inteligentes, oferecendo soluções 
              completas com qualidade, agilidade e confiança. Utilizamos o sistema <strong className="text-foreground">CondFy</strong> para 
              gestão completa de tecnologia, garantindo mais controle e praticidade para seu condomínio.
            </p>
            
            {/* Highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-base font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Stats row */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-10 pt-8 sm:pt-10 border-t border-gray-200">
              {[
                { value: "500+", label: "Condomínios" },
                { value: "SP", label: "Toda cidade" },
                { value: "100%", label: "Compromisso" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
