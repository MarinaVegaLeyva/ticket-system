import { describe, it, expect } from "vitest";
import ticketsReducer, { addTicket, removeTicket } from "./ticketsSlice";

describe("ticketsSlice", () => {
  it("should return the initial state", () => {
    const state = ticketsReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({ tickets: [] });
  });

  it("should add a ticket", () => {
    const initialState = { tickets: [] }; 
    const newTicket = { id: 1, name: "Ticket 1" };
    const state = ticketsReducer(initialState, addTicket(newTicket));
    expect(state.tickets).toEqual([newTicket]);
  });

  it("should remove a ticket", () => {
    const initialState = { tickets: [{ id: 1, name: "Ticket 1" }] }; 
    const state = ticketsReducer(initialState, removeTicket(1));
    expect(state.tickets).toEqual([]);
  });
});