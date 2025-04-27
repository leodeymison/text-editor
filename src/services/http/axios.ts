import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const API = axios.create({
  baseURL: apiUrl,
});
