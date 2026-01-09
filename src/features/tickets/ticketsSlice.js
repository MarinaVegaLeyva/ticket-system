import { createSlice } from '@reduxjs/toolkit'

const savedTickets = JSON.parse(localStorage.getItem('tickets')) || []

const initialState = {
  tickets: savedTickets
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTicket: (state, action) => {
      state.tickets.push(action.payload)
      localStorage.setItem('tickets', JSON.stringify(state.tickets))
    },
    removeTicket: (state, action) => {
      state.tickets = state.tickets.filter(
        ticket => ticket.id !== action.payload
      )
      localStorage.setItem('tickets', JSON.stringify(state.tickets))
    }
  }
})

export const { addTicket, removeTicket } = ticketsSlice.actions
export default ticketsSlice.reducer