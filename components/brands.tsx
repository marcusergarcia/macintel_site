"use client"

import { useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const brands = [
  { name: "Intelbras", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/intelbras_logo.PNG-WJLnhLTkpCjKiWQymNt15lCjXV8B8n.png" },
  { name: "HikVision", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HikVision-Logo-1-7309-bvLrMUzf1jc8mXMClfg9Tjr8jhNwJu.png" },
  { name: "HDL", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hdl-logo-37cy3Imqy7grvRbazVh0NbkSBebC5d.png" },
  { name: "Control iD", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-control-id-QxKANDcnDabch1Ar8vrtF6n3qrJXn8.png" },
  { name: "Nice Peccinin", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Nice_Peccinin_FB.png-h9nu7ia42nflWfGCBjhx8FZmETt4as.webp" },
  { name: "Garen", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/garen_logo-qzfIzGz82sDeoDs2z8ou14usHvGQ0u.png" },
  { name: "AGL", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agl_logo.PNG-0WcOrDyvh7qF2u7Be1a8NahqWB4nKb.png" },
  { name: "PPA", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ppa_logo.PNG-S2I7Y73DAGcr4rCvFHbRn6FeHViG4w.png" },
  { name: "Conduvox", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/conduvox_logo.png-fBKdB0M0z2DGdOlC5C2IeGXyUvwbK5.webp" },
  { name: "InovaPort", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inovaport_logo.PNG-kl3WcUNjWCdDQyGz3PqATXfyox4hwT.png" },
  { name: "Pro Eletronic", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_pro-DAQIyA0nAmdlxX38MmJgADJU8pyDCo.png" },
  { name: "IPEC", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ipec_logo-CZy9S8hby6m7JKSggf50AWW6LTCWX4.jpg" },
  { name: "JFL Alarmes", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jfl_logo-r8gB93dgugRq2QGpFGTaZmEwo4qDmr.jpg" },
]

export function Brands() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  )

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Trabalhamos com as melhores marcas do mercado
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Equipamentos de alta qualidade para garantir segurança e durabilidade
          </p>
        </div>

        {/* Carousel de Marcas */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {brands.map((brand) => (
              <CarouselItem key={brand.name} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center h-28 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
