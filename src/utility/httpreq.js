import Axios from "axios";

const headers = (secured, file) => {
  let options = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  if (secured) {
    options["Authorization"] = localStorage.getItem("token");
  }
  if (file) {
    options["Content-Type"] = "multipart/form-data";
  }
  return options;
};

export const axios = (secured, file) => {
  return Axios.create({
    baseURL: "http://localhost:8082",
    headers: headers(secured),
  });
};
