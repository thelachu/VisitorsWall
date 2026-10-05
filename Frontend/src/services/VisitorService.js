import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/visitors`;

export const listVisitors = () => axios.get(BASE_URL);

export const createVisitor = (visitor) => axios.post(BASE_URL, visitor);

export const updateVisitor = (id, visitor) =>
  axios.put(`${BASE_URL}/${id}`, visitor);

export const deleteVisitorById = (id) => axios.delete(`${BASE_URL}/${id}`);

export const getVisitorById = (id) => axios.get(`${BASE_URL}/${id}`);
