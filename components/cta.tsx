import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-primary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl text-balance">
            Precisa de suporte técnico?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 text-pretty">
            Abra um chamado diretamente pelo WhatsApp e nossa equipe entrará em contato rapidamente.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
              <a 
                href="https://wa.me/551152419494?text=Olá!%20Preciso%20abrir%20um%20chamado%20de%20suporte%20técnico." 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Abrir Chamado via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto">
              <a href="tel:+551152419494">
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-primary-foreground/60">
            Atendimento de segunda a sexta, das 8h às 18h
          </p>
        </div>
      </div>
    </section>
  )
}
