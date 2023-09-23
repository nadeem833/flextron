import axios from "axios";

console.log(REACT_APP_ENV);

let BASEURL = "https://stg-api.shipntrack.app/";


export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const privateRequest = axios.create({
  baseURL: BASEURL,
  withCredentials: true,
  timeout: 60000
});
