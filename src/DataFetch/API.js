const API_URI = "https://api.quicksell.co/v1/internal/frontend-assignment";

const getData = async () => {
  try {
    // Fetching the data
    const response = await fetch(API_URI);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getData;
