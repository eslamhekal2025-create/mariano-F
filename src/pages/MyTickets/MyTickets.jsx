import { useEffect, useState } from "react";
import { getMyTickets } from "../../services/tickets.js";
import "./MyTickets.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function MyTickets() {
  const [tickets, setTickets] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    loadTickets();
  }, []);

 async function deleteTicket(id){
    const {data}=await axios.delete(`${API}/deleteTicket`, {
  data: {
    id,
  },
});
    if (data.success) {
      toast.success("Ticket deleted");

      setTickets((prev) => prev.filter((ticket) => ticket._id !== id));
    }
  }
  const loadTickets = async () => {
    try {
      const { data } = await getMyTickets();
      setTickets(data.tickets);
    } catch (err) {
      console.log(err);
    }
  };

  const totalProfit = tickets.reduce(
    (total, ticket) => total + (ticket.profit || 0),
    0
  );

  const totalCommission = tickets.reduce(
    (total, ticket) => total + (ticket.commission || 0),
    0
  );

  return (
    <div className="tickets-container">
      <h2>My Tickets</h2>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>PNR</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Airline</th>
              <th>Place</th>

              <th>Adults</th>
              <th>Children</th>
              <th>Infants</th>

              <th>Total Passengers</th>

              <th>Total Actual</th>
              <th>Total Client</th>

              <th>Profit</th>
              <th>Commission</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td className="pnr">{ticket.pnr}</td>

                <td>{ticket.customerName}</td>

                <td>
                  {ticket.customerType === "Company"
                    ? "🏢 Company"
                    : "👤 Client"}
                </td>

                <td>{ticket.airline}</td>

                <td>{ticket.executionPlace}</td>

                <td>{ticket.adults}</td>

                <td>{ticket.children}</td>

                <td>{ticket.infants}</td>

                <td>{ticket.totalPassengers}</td>
<td>{ticket.totalActualPrice?.toLocaleString()} EGP</td>
<td>{ticket.totalClientPrice?.toLocaleString()} EGP</td>
<td>{ticket.profit?.toLocaleString()} EGP</td>
<td>{ticket.commission?.toLocaleString()} EGP</td>
                <td>
{ticket.user===localStorage.getItem("userId")?<button
  onClick={() => deleteTicket(ticket._id)}
  className="delete-ticket"
>
  X
</button>        :null} 

</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="summary">
        <h3>Total Profit : {totalProfit.toLocaleString()} EGP</h3>

        <h3>
          Total 10% Commission : {totalCommission.toLocaleString()} EGP
        </h3>
      </div>
    </div>
  );
}