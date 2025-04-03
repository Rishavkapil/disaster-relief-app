import axios from "axios";

const API_URL = "http://localhost:5000/api/victims"; // Adjust if deployed

// Fetch all victims
export const getVictims = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching victims:", error);
    return [];
  }
};

// Fetch a single victim by ID
export const getVictimById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching victim:", error);
    return null;
  }
};

// Register a new victim
export const registerVictim = async (victimData) => {
  try {
    const response = await axios.post(API_URL, victimData);
    return response.data;
  } catch (error) {
    console.error("Error registering victim:", error);
    return null;
  }
};

// Update a victim
export const updateVictim = async (id, victimData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, victimData);
    return response.data;
  } catch (error) {
    console.error("Error updating victim:", error);
    return null;
  }
};

// Delete a victim
export const deleteVictim = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting victim:", error);
    return null;
  }
};
