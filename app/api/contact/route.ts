import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing name, email or message" }, { status: 400 })
    }

    const TO_EMAIL = process.env.TO_EMAIL || "esf12364@gmail.com"
    const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@seusite.com"
    const SITE_NAME = process.env.SITE_NAME || "Portfolio"

    const htmlContent = `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `

    const { data, error } = await resend.emails.send({
      from: `${SITE_NAME} <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: `${name} <${email}>`,
      subject: `Contato do site: ${name}`,
      html: htmlContent,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error("/api/contact error:", message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
