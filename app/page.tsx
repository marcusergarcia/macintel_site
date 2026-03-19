import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Brands } from "@/components/brands"
import { Services } from "@/components/services"
import { CondFy } from "@/components/condfy"
import { SmartPlan } from "@/components/smart-plan"
import { Differentials } from "@/components/differentials"
import { About } from "@/components/about"
import { Coverage } from "@/components/coverage"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <CondFy />
        <SmartPlan />
        <Differentials />
        <About />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
