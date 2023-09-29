import axios from "axios";

let BASEURL = "https://flextron-backend-669d4058ed23.herokuapp.com/";


export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const privateRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
});
