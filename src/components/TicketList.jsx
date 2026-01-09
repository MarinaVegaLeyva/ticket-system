import { useSelector, useDispatch } from "react-redux";
import { removeTicket } from "../features/tickets/ticketsSlice";
import { useState } from "react";
import TicketDetail from "./TicketDetail";
import "./TicketList.css";

const ITEMS_PER_PAGE = 3;

function TicketList() {
  const tickets = useSelector((state) => state.tickets.tickets) || [];
  const dispatch = useDispatch();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  if (tickets.length === 0) {
    return <p>No hay reportes aún</p>;
  }

  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentTickets = tickets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      {!selectedTicket && (
        <>
          <table className="ticket-table">
            <thead>
              <tr>
                <th>Asunto</th>
                <th>Prioridad</th>
                <th>Fecha</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {currentTickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.subject}</td>
                  <td>{ticket.priority}</td>
                  <td>{ticket.date}</td>
                  <td>{ticket.status}</td>
                  <td>
                    <button  className="btn btn-primary" onClick={() => setSelectedTicket(ticket)}>
                      Ver detalle
                    </button>
                    <button className="btn btn-danger" onClick={() => dispatch(removeTicket(ticket.id))}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINACIÓN */}
          <div className="pagination">
            <button
              disabled={safePage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Anterior
            </button>

            <span>
              {safePage} / {totalPages}
            </span>

            <button
              disabled={safePage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
      {selectedTicket && (
        <TicketDetail
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </>
  );
}

export default TicketList;
