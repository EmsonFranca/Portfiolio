import { Github, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-between gap-4 ">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Emson França. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:esf12364@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/EmsonFranca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
