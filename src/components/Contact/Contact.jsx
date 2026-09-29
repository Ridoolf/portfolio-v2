import { useCallback, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  CONTACT_EMAIL,
  EMAILJS_CONFIG,
  isEmailJsConfigured,
} from '../../config/emailjs'
import { useLocale } from '../../i18n/LocaleContext'
import { FormNotice } from '../FormNotice/FormNotice'
import './Contact.css'

const INITIAL_FORM = {
  name: '',
  email: '',
  message: '',
}

export function Contact() {
  const { ui } = useLocale()
  const copy = ui.contact
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
        message: copy.errorNotConfigured,
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
        message: copy.success,
      })
    } catch {
      setNotice({
        type: 'error',
        message: copy.errorSend,
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contacto" className="contact section-shell">
      <div className="contact__container">
        <h2 className="section-title">{copy.title}</h2>

        <div className="contact__layout">
          <div className="contact__intro">
            <p className="contact__text">{copy.intro}</p>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">
                {copy.name}
              </label>
              <input
                id="contact-name"
                className="contact__input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={copy.namePlaceholder}
                required
                autoComplete="name"
                disabled={isSending}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">
                {copy.email}
              </label>
              <input
                id="contact-email"
                className="contact__input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={copy.emailPlaceholder}
                required
                autoComplete="email"
                disabled={isSending}
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">
                {copy.message}
              </label>
              <textarea
                id="contact-message"
                className="contact__input contact__textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={copy.messagePlaceholder}
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
              {isSending ? copy.submitting : copy.submit}
            </button>
          </form>
        </div>
      </div>

      {notice && (
        <FormNotice
          type={notice.type}
          message={notice.message}
          onClose={closeNotice}
          closeLabel={ui.contact.closeNotice}
        />
      )}
    </section>
  )
}
