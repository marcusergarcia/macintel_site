"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "CondFy", href: "#condfy" },
  { name: "Plano Inteligente", href: "#plano-inteligente" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" 
        : "bg-transparent"
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img
              src="/images/macintel.png"
              alt="Macintel"
              className={`h-14 sm:h-20 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled 
                  ? "text-muted-foreground hover:text-foreground" 
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6 shadow-lg shadow-accent/25">
            <a href="https://wa.me/551141189314?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Macintel." target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              Fale Conosco
            </a>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img
                  src="/images/macintel.png"
                  alt="Macintel"
                  className="h-[72px] w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-xl p-2.5 text-foreground hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white h-14 font-bold rounded-xl">
                  <a href="https://wa.me/551141189314?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Macintel." target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Fale Conosco
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
