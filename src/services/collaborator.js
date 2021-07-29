import API from "./api";

const CollaboratorsService = {
  all: () => API.get("/collaborators"),
  index: (search) => API.get(`/collaborators?id=${search}`),
  create: (data) =>
    API.post("/collaborators", data),
  delete: (id) => API.delete(`/collaborators/${id}`),
  update: (data, id) => API.put(`/collaborators/${id}`, data),
};

export default CollaboratorsService;