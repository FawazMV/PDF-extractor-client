import axios from "./axiosInstance";

// Function to handle user login
export const userLogin = async ({ email, password }) => {
  try {
    // Make a POST request to the server to log in the user
    const result = await axios.post("/auth/login", { email, password });

    return result; // Return the result of the request
  } catch (error) {
    console.error(error);
    return error.response; // Return the error response in case of an error
  }
};

// Function to handle user registration
export const userRegistration = async ({ email, password }) => {
  try {
    // Make a POST request to the server to register the user
    const result = await axios.post("/auth/register", { email, password });

    return result; // Return the result of the request
  } catch (error) {
    console.error(error);
    return error.response; // Return the error response in case of an error
  }
};
