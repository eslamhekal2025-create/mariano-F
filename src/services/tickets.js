import axios from "axios";

const BASE_URL = "http://localhost:3000";
export const addTicket = async (ticketData,) => {
  const token = localStorage.getItem("token");

  return axios.post(`${BASE_URL}/addTickets`, ticketData, {
    headers: {
      token,
    },
  });
};

export const getMyTickets = async () => {
  const token = localStorage.getItem("token");

  return axios.get(`${BASE_URL}/getMyTickets`, {
    headers: {
      token,
    },
  });
};