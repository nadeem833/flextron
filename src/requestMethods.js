import axios from "axios";

let BASEURL = "https://backend.flextron.io/";

export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const privateRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  //   timeout: 60000
});
