import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio Pessoal",
    description:
      "Site portfolio moderno e responsivo desenvolvido com Next.js e Tailwind CSS, apresentando projetos e habilidades.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/EmsonFranca",
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Interface de administração completa com gráficos interativos, tabelas de dados e gerenciamento de usuários.",
    technologies: ["React", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "https://github.com/EmsonFranca",
  },
  {
    title: "Landing Page Responsiva",
    description: "Página de destino moderna e totalmente responsiva para startup de tecnologia, com animações suaves.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/EmsonFranca",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Projetos em Destaque</h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi recentemente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="p-6 flex-1 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-3 text-center">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
