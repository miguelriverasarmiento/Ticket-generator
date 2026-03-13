import { useContext } from "react";
import { ShowTicketContext } from "../context/ShowTicket";

export const useShowTicket = () => {
    const context = useContext(ShowTicketContext)

    if (!context) {
        throw new Error("useShowTicket must be used within a ShowTicketProvider")
    }

    return context;
}