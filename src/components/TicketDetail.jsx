function TicketDetail({ ticket, onClose }) {
  if (!ticket) return null

  return (
    <div>
      <h3>Detalle del Ticket</h3>
      <p><strong>Asunto:</strong> {ticket.subject}</p>
      <p><strong>Prioridad:</strong> {ticket.priority}</p>
      <p><strong>Fecha:</strong> {ticket.date}</p>
      <p><strong>Detalle:</strong> {ticket.detail}</p>

      <button className="btn btn-secondary" onClick={onClose}>Cerrar</button>
    </div>
  )
}

export default TicketDetail