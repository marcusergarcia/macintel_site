import { MapPin, Users, Clock, Wrench } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Toda São Paulo",
    description: "Atendemos condomínios em todas as regiões da cidade",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Técnicos treinados e certificados",
  },
  {
    icon: Clock,
    title: "Suporte Rápido",
    description: "Atendimento ágil para emergências",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva",
    description: "Contratos para evitar problemas",
  },
]

export function Coverage() {
  return (
    <section id="atuacao" className="py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base font-bold text-blue-400 uppercase tracking-widest">Área de Atuação</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl text-balance">
            Atendimento em São Paulo - SP
          </h2>
          <p className="mt-6 text-xl text-gray-300 text-pretty leading-relaxed">
            Atendemos condomínios em toda a cidade de São Paulo, com suporte rápido e equipe especializada.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-4xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary-foreground">{feature.title}</h3>
              <p className="mt-3 text-base text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
