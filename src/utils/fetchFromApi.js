import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const options = {
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY, // Ensure this is defined
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data; // Access the data property
  } catch (error) {
    console.error("Error fetching data:", error);
    return { items: [] }; // Return an empty array on error
  }
};

