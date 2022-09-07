import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/mtmihaylov/Lab08-Project",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getThreads = () => {
  return apiClient.get("/threads");
};

export { getThreads };
