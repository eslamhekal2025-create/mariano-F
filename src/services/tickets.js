import axios from "axios";

const BASE_URL =import.meta.env.VITE_API_URL;  


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