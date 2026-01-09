import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTicket } from '../features/tickets/ticketsSlice'
import './TicketForm.css'

function TicketForm() {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    subject: '',
    priority: 'Media',
    detail: '',
    file: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm({
      ...form,
      [name]: files ? files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(
      addTicket({
        id: Date.now(),
        subject: form.subject,
        priority: form.priority,
        detail: form.detail,
        date: new Date().toLocaleDateString(),
        status: 'Abierto'
      })
    )

    setForm({
      subject: '',
      priority: 'Media',
      detail: '',
      file: null
    })
  }

  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <input
        name="subject"
        placeholder="Asunto"
        value={form.subject}
        onChange={handleChange}
        required
      />

      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
      >
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <textarea
        name="detail"
        placeholder="Detalle"
        value={form.detail}
        onChange={handleChange}
        required
      />

      <input
        type="file"
        name="file"
        onChange={handleChange}
      />

      <button className="btn btn-primary" type="submit">Enviar</button>
    </form>
  )
}

export default TicketForm