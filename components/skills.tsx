import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap, Layers, Wind, GitBranch } from "lucide-react"

const skills = [
  {
    name: "HTML5",
    description: "Estruturação semântica e acessível",
    icon: Code2,
  },
  {
    name: "CSS3",
    description: "Estilização moderna e responsiva",
    icon: Palette,
  },
  {
    name: "JavaScript",
    description: "ES6+ e programação funcional",
    icon: Zap,
  },
  {
    name: "React / Next.js",
    description: "Desenvolvimento de aplicações modernas",
    icon: Layers,
  },
  {
    name: "Tailwind CSS",
    description: "Design system e utility-first CSS",
    icon: Wind,
  },
  {
    name: "Git & GitHub",
    description: "Controle de versão e colaboração",
    icon: GitBranch,
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 ">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Habilidades & Tecnologias</h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ferramentas e tecnologias que utilizo para criar experiências web incríveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                >
                  <div className="space-y-3 flex flex-col items-center text-center">
                    <Icon className="w-10 h-10 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{skill.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
