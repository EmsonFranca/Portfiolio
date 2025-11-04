export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">Sobre Mim</h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Sou estudante universitário formado em{" "}
              <strong className="text-foreground">Bacharelado em Tecnologia da Informação</strong> pela Universidade
              Federal Rural do Semiárido (UFERSA) e atualmente estudante de{" "}
              <strong className="text-foreground">Engenharia de Software</strong> também pela UFERSA.
            </p>
            <p className="text-lg">
              Atuo como <strong className="text-foreground">Desenvolvedor Frontend</strong> na{" "}
              <strong className="text-foreground">AltoTech Junior</strong>, uma empresa júnior localizada na UFERSA -
              Campus Pau dos Ferros, no Alto Oeste Potiguar.
            </p>
            <p className="text-lg">
              Sou desenvolvedor front-end apaixonado por criar interfaces de usuário atraentes, acessíveis e funcionais
              para sites e aplicativos web. Utilizo HTML, CSS e JavaScript, com foco em design responsivo e experiência
              do usuário (UX/UI).
            </p>
            <p className="text-lg">
              Valorizo o <strong className="text-foreground">trabalho em equipe</strong>, a{" "}
              <strong className="text-foreground">criatividade</strong> e a{" "}
              <strong className="text-foreground">acessibilidade na web</strong>. Minha jornada é movida pela
              curiosidade e pelo desejo de construir a web do futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
