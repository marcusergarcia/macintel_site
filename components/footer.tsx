import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Câmeras de Segurança", href: "#servicos" },
    { name: "Controle de Acesso", href: "#servicos" },
    { name: "Interfones", href: "#servicos" },
    { name: "Portões Automáticos", href: "#servicos" },
    { name: "Reconhecimento Facial", href: "#servicos" },
  ],
  company: [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Nossos Serviços", href: "#servicos" },
    { name: "Área de Atuação", href: "#atuacao" },
    { name: "Contato", href: "#contato" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo-quadrado.png"
                alt="Macintel"
                className="h-16 w-16 rounded-xl"
              />
            </Link>
            <p className="mt-6 max-w-md text-base text-white/60 leading-relaxed">
              Segurança eletrônica para condomínios em São Paulo - SP. 
              Instalação, manutenção e tecnologia em um só lugar.
            </p>
            
            {/* Contact info */}
            <div className="mt-8 space-y-3">
              <a href="https://wa.me/551141189314" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
                <span>(11) 4118-9314</span>
              </a>
              <a href="mailto:contato@macintel.com.br" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
                <span>contato@macintel.com.br</span>
              </a>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5" />
                <span>Sao Paulo - SP</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Serviços</h3>
            <ul className="mt-6 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-white/60 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Empresa</h3>
            <ul className="mt-6 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-base text-white/60 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Macintel. Todos os direitos reservados.
          </p>
          <p className="text-sm font-medium text-accent">
            Instalação + Tecnologia + Gestão
          </p>
        </div>
      </div>
    </footer>
  )
}
