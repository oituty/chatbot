import axios from "axios";

if (!process.env.BASE_URL) {
  throw new Error("Arquivo .env não encontrado");
}

export default axios.create({ baseURL: process.env.BASE_URL });
