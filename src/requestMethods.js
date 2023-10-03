import axios from "axios";
import { store } from "./store";

let BASEURL = "https://backend.flextron.io/";

export const publicRequest = axios.create({
  baseURL: BASEURL,
});

export const privateRequest = axios.create({
  baseURL: BASEURL,
  headers: {
      'Content-Type': 'application/json',
  },
  timeout: 60000
});

privateRequest.interceptors.response.use(
  (response) => {
    // Return the response if it's successful
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Token has expired, redirect to login page
      window.location.href = '/sign-in'; // Replace with your login page URL
    }
    // Handle other errors as needed
    return Promise.reject(error);
  }
);

// Subscribe to changes in the token value
store.subscribe(() => {
  const state = store.getState();
  const authToken = state.auth.userToken;
  privateRequest.defaults.headers.Authorization = `Bearer ${authToken}` || '';
});

// Initial setup of Authorization header
const initialState = store.getState();
const initialAuthToken = initialState.auth.userToken;
privateRequest.defaults.headers.Authorization = initialAuthToken || '';

console.log('header', privateRequest.defaults.headers)