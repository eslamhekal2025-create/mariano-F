import { useState } from "react";
import "./AddTickets.css";
import { addTicket } from "../../services/tickets";

export default function AddTicket() {
  const initialTicket = {
    pnr: "",
    airline: "",
    executionPlace: "",
    customerName: "",
    customerType: "Company",

    adults: 1,
    children: 0,
    infants: 0,

    actualAdultPrice: "",
    clientAdultPrice: "",

    actualChildPrice: "",
    clientChildPrice: "",

    actualInfantPrice: "",
    clientInfantPrice: "",
  };

  const [ticket, setTicket] = useState(initialTicket);

  const handleChange = (e) => {
    setTicket({
      ...ticket,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addTicket(ticket);

      alert("Ticket Added Successfully");

      setTicket(initialTicket);

    } catch (err) {
      console.log(err.response?.data || err);
    }
  };

  return (
    <div className="add-ticket">
      <form className="ticket-form" onSubmit={handleSubmit}>

        <h2>Add Ticket</h2>

        <input
          type="text"
          name="pnr"
          placeholder="PNR"
          value={ticket.pnr}
          onChange={handleChange}
        />

        <input
          type="text"
          name="airline"
          placeholder="Airline"
          value={ticket.airline}
          onChange={handleChange}
        />

        <input
          type="text"
          name="executionPlace"
          placeholder="Execution Place"
          value={ticket.executionPlace}
          onChange={handleChange}
        />

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={ticket.customerName}
          onChange={handleChange}
        />

        <select
          name="customerType"
          value={ticket.customerType}
          onChange={handleChange}
        >
          <option value="Company">Company</option>
          <option value="Client">Client</option>
        </select>

        <input
          type="number"
          name="adults"
          placeholder="Adults"
          value={ticket.adults}
          onChange={handleChange}
        />

        <input
          type="number"
          name="actualAdultPrice"
          placeholder="Adult Actual Price"
          value={ticket.actualAdultPrice}
          onChange={handleChange}
        />

        <input
          type="number"
          name="clientAdultPrice"
          placeholder="Adult Client Price"
          value={ticket.clientAdultPrice}
          onChange={handleChange}
        />

        <input
          type="number"
          name="children"
          placeholder="Children"
          value={ticket.children}
          onChange={handleChange}
        />

        {Number(ticket.children) > 0 && (
          <>
            <input
              type="number"
              name="actualChildPrice"
              placeholder="Child Actual Price"
              value={ticket.actualChildPrice}
              onChange={handleChange}
            />

            <input
              type="number"
              name="clientChildPrice"
              placeholder="Child Client Price"
              value={ticket.clientChildPrice}
              onChange={handleChange}
            />
          </>
        )}

        <input
          type="number"
          name="infants"
          placeholder="Infants"
          value={ticket.infants}
          onChange={handleChange}
        />

        {Number(ticket.infants) > 0 && (
          <>
            <input
              type="number"
              name="actualInfantPrice"
              placeholder="Infant Actual Price"
              value={ticket.actualInfantPrice}
              onChange={handleChange}
            />

            <input
              type="number"
              name="clientInfantPrice"
              placeholder="Infant Client Price"
              value={ticket.clientInfantPrice}
              onChange={handleChange}
            />
          </>
        )}

        <button type="submit">Add Ticket</button>

      </form>
    </div>
  );
}