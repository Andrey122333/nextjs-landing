'use client'

import { useState, FormEvent } from 'react'
import styles from './ContactForm.module.css'

// Client Component для интерактивности формы
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон'
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный телефон'
    }

    if (!formData.date) {
      newErrors.date = 'Выберите дату'
    }

    if (!formData.time) {
      newErrors.time = 'Выберите время'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Имитация отправки формы (в реальном приложении — API запрос)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log('Отправка формы:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', guests: '2', date: '', time: '', message: '' })
      setErrors({})
      
      // Сброс статуса через 3 секунды
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      console.error('Ошибка отправки формы:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Очистка ошибки при изменении поля
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h2>Забронировать столик</h2>
            <p>
              Хотите провести встречу команды или поработать в комфортной обстановке?
              Забронируйте столик прямо сейчас!
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Ваше имя <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  placeholder="Иван Иванов"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.error} role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="ivan@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className={styles.error} role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  placeholder="+7 (999) 123-45-67"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className={styles.error} role="alert">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="guests" className={styles.label}>
                  Количество гостей
                </label>
                <select
                  id="guests"
                  value={formData.guests}
                  onChange={(e) => handleChange('guests', e.target.value)}
                  className={styles.input}
                >
                  <option value="1">1 гость</option>
                  <option value="2">2 гостя</option>
                  <option value="3">3 гостя</option>
                  <option value="4">4 гостя</option>
                  <option value="5">5 гостей</option>
                  <option value="6">6+ гостей</option>
                </select>
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="date" className={styles.label}>
                  Дата <span className={styles.required}>*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
                {errors.date && (
                  <span id="date-error" className={styles.error} role="alert">
                    {errors.date}
                  </span>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="time" className={styles.label}>
                  Время <span className={styles.required}>*</span>
                </label>
                <input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                  className={`${styles.input} ${errors.time ? styles.inputError : ''}`}
                  aria-invalid={!!errors.time}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                />
                {errors.time && (
                  <span id="time-error" className={styles.error} role="alert">
                    {errors.time}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Пожелания (необязательно)
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={styles.textarea}
                placeholder="Есть особые пожелания? Укажите здесь..."
                rows={4}
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${styles.submit}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Бронирование...' : 'Забронировать столик'}
            </button>

            {submitStatus === 'success' && (
              <div className={styles.successMessage} role="status">
                Отлично! Ваш столик забронирован. Ждём вас!
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage} role="alert">
                Произошла ошибка. Попробуйте позже или позвоните нам.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
