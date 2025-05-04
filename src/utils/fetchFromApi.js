import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const fetchFromApi = async (url) => {
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;

  if (!apiKey) {
    console.error("Error: REACT_APP_RAPID_API_KEY is not defined in the environment variables.");
    return { items: [] }; // Return an empty array if the API key is missing
  }

  const options = {
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data; // Return the data property from the response
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { items: [] }; // Return an empty array on error
  }
};

export default fetchFromApi;