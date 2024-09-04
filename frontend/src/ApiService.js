// API service endpoint and HTTP methods

// load API baseurl from .env:
const api_baseurl = process.env.REACT_APP_API_BASEURL;

//GET
export const getData = async (endpoint) => {
  try {
    const response = await fetch(`${api_baseurl}/${endpoint}`);
    if (!response.ok) {
      throw new Error("Network error.");
    }
    return await response.json();
  } catch (error) {
    console.error("API GET Error:", error);
    throw error;
  }
};

// POST
export const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${api_baseurl}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    });

    if (!response.ok) {
      throw new Error("Network error.");
    }

    return await response.json(); // Parse and return the JSON response
  } catch (error) {
    console.error("API POST Error:", error);
    throw error;
  }
};
