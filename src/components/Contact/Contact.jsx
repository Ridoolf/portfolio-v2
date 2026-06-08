import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  CONTACT_EMAIL,
  EMAILJS_CONFIG,
  isEmailJsConfigured,
} from '../../config/emailjs'
import { FormNotice } from '../FormNotice/FormNotice'
import './Contact.css'

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [isSending, setIsSending] = useState(false)
  const [notice, setNotice] = useState(null)

  const closeNotice = useCallback(() => setNotice(null), [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!isEmailJsConfigured()) {
      setNotice({
        type: 'error',
        message:
          'El formulario aún no está configurado. Agregá las variables de EmailJS en tu archivo .env.',
      })
      return
    }

    setIsSending(true)

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          to_email: CONTACT_EMAIL,
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey,
      )

      setForm(INITIAL_FORM)
      setNotice({
        type: 'success',
        message: '¡Mensaje enviado! Te voy a responder a la brevedad.',
      })
    } catch {
      setNotice({
        type: 'error',
        message:
          'No se pudo enviar el mensaje. Probá de nuevo en unos minutos.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contacto" className="contact section-shell">
      <div className="contact__container">
        <h2 className="section-title">Contacto</h2>

        <div className="contact__layout">
          <div className="contact__intro">
            <p className="contact__text">
              ¿Tenés un proyecto en mente o querés charlar sobre una idea?
              Completá el formulario y te respondo a la brevedad.
            </p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">
                Nombre
              </label>
              <input
                id="contact-name"
                className="contact__input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                autoComplete="name"
                disabled={isSending}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className="contact__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                autoComplete="email"
                disabled={isSending}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">
                Mensaje
              </label>
              <textarea
                id="contact-message"
                className="contact__input contact__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Contame en qué puedo ayudarte..."
                rows={5}
                required
                disabled={isSending}
              />
            </div>

            <button
              className="contact__submit"
              type="submit"
              disabled={isSending}
            >
              {isSending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>

      {notice && (
        <FormNotice
          type={notice.type}
          message={notice.message}
          onClose={closeNotice}
        />
      )}
    </section>
  )
}
