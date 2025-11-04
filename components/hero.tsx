"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail } from "lucide-react"
import Image from "next/image"
import icon from '@/public/perfil.jpg'

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary to-accent blur-lg opacity-30 animate-pulse"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden animate-float shadow-xl ring-4 ring-primary/20">
              <Image
                src={icon}
                alt="Foto de perfil de Emson França"
                fill
                className="object-cover rounded-full"
                priority
                unoptimized={false}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
              Olá, eu sou{" "}
              <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                Emson França
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground text-balance">
              Desenvolvedor Front-End
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Apaixonado por criar interfaces de usuário atraentes, acessíveis e funcionais para sites e aplicativos web.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Entre em Contato
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              <a
                href="https://github.com/EmsonFranca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Ver GitHub
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <a
              href="#about"
              className="inline-block text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
