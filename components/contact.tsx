"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Github } from "lucide-react"

type FormState = {
  name: string
  email: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    if (!form.name.trim()) return "Por favor, informe seu nome."
    if (!form.email.trim()) return "Por favor, informe seu e-mail."
    const re = /\S+@\S+\.\S+/
    if (!re.test(form.email)) return "Por favor, informe um e-mail válido."
    if (!form.message.trim()) return "Por favor, escreva uma mensagem."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    const validation = validate()
    if (validation) {
      setError(validation)
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Erro ao enviar mensagem.")

      setSuccess("Mensagem enviada com sucesso! Responderei o mais breve possível.")
      setForm({ name: "", email: "", message: "" })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err)
      setError(msg || "Erro inesperado ao enviar mensagem.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl space-y-12">
        {/* Título */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Vamos Conversar?</h2>
          <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
          </p>
        </div>

        {/* Cartões de contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">esf12364@gmail.com</p>
              <Button asChild className="w-full">
                <a href="mailto:esf12364@gmail.com">Enviar Email</a>
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card">
            <div className="space-y-4 text-center">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">GitHub</h3>
              <p className="text-muted-foreground">github.com/EmsonFranca</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <a href="https://github.com/EmsonFranca" target="_blank" rel="noopener noreferrer">
                  Ver Perfil
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Formulário */}
        <Card className="p-8 border-border bg-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500 font-medium">{error}</div>}
            {success && <div className="text-green-600 font-medium">{success}</div>}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Nome
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-border bg-input p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-border bg-input p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seu@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="mt-1 block w-full rounded-md border border-border bg-input p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2">
              <Button type="submit" disabled={loading} className="px-6 w-full sm:w-auto">
                {loading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
              <Button asChild variant="ghost" className="w-full sm:w-auto">
                <a href="mailto:esf12364@gmail.com">Ou envie por e-mail</a>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}
