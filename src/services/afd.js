import API from "./api";

const AfdService = {
  all: () => API.get("/afd"),
  index: (search) => API.get(`/afd?id=${search}`),
  create: (data) =>
    API.post("/afd", data),
  delete: (pis) => API.delete(`/afd/${pis}`),
};

export default AfdService;