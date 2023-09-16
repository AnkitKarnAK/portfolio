import axios from "axios";

export const fetchStats = async (username) => {
  try {
    const response = await axios.get(`/api/github/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
