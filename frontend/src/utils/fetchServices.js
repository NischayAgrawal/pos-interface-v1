import axios from "axios";

export const fetchServices = async () => {
  try {
    const response = await axios.get("/services");
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch services. Please try again.");
  }
};
