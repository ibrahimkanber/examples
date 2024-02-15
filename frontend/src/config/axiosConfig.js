import { TOKEN } from "../constants";

export const api_config = {
  method: "get",
  maxBodyLength: Infinity,
  baseURL: "https://gateway.eg-on.com",
  headers: {
    Authorization: TOKEN,
  },
};
