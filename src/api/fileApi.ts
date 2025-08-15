import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/files"
});

export const getFiles = (path: string = "") =>
  api.get("/", { params: { path } }).then(res => res.data);

export const uploadFile = (file: File, path: string = "") => {
  const formData = new FormData();
  formData.append("file", file);
  return api.post("/upload", formData);
};
