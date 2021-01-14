import React, { useState } from 'react'
import { init } from 'emailjs-com'

import './Contact.scss'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [formError, setFormError] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [senderEmail, setSenderEmail] = useState('')
  const receiverEmail = 'daohoangngan1997@gmail.com'
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
  const EMAILJS_USERID = process.env.REACT_APP_EMAILJS_USERID
  init(EMAILJS_USERID)

  const sendFeedback = ({ senderEmail, receiverEmail, message }) => {
    window.emailjs
      .send('default_service', EMAILJS_TEMPLATE_ID, {
        to_email: receiverEmail,
        from_email: senderEmail,
        message: message
      })
      .then((res) => {
        setFormSubmitted(false)
        if (res.status === 200) {
          setFormSuccess(true)
        }
      })
      .catch((err) => {
        setFormSubmitted(false)
        setFormError(err.text)
      })
  }

  const handleSenderChange = (e) => {
    setSenderEmail(e.target.value)
  }

  const handleFormCancel = () => {
    setSenderEmail('')
    setFormSubmitted(false)
    setMessage('')
    setFormSuccess(false)
    setFormError(false)
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendFeedback({
      senderEmail,
      receiverEmail,
      message
    })

    setFormSubmitted(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className='contact__title'>Contact Me</div>
      {formSuccess ? (
        <div className='contact__message contact__message--success'>
          Thank you! I will get back to you as soon as possible.
        </div>
      ) : (
        <div className='contact__message contact__message--error'> {formError} </div>
      )}
      <form onSubmit={handleFormSubmit} className='contact__form'>
        <div className='form__content'>
          <label htmlFor='to_email' className='form__label'>
            To:
          </label>
          <input
            disabled
            type='email'
            name='to_email'
            id='to_email'
            value={receiverEmail}
            className='form__input'
          />
        </div>
        <div className='form__content'>
          <label htmlFor='from_email' className='form__label'>
            From:
          </label>
          <input
            required
            type='email'
            value={senderEmail}
            name='from_email'
            id='from_email'
            className='form__input'
            onChange={handleSenderChange}
          />
        </div>
        <div className='form__content'>
          <label htmlFor='message' className='form__label'>
            Message:
          </label>
          <textarea
            required
            className='form__input'
            id='message'
            name='message'
            onChange={handleChange}
            placeholder='Enter your message here'
            value={message}
          />
        </div>

        <div className='form__btn'>
          <button className='form__btn--cancel' onClick={handleFormCancel}>
            Cancel
          </button>
          <input
            type='submit'
            value={formSubmitted ? 'Sending...' : formSuccess ? 'Sent!' : 'Send!'}
            disabled={formSubmitted ? true : formSuccess ? true : false}
            className='form__btn--submit'
          />
        </div>
      </form>
    </div>
  )
}

export default Contact
