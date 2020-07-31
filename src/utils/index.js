// Create configured instance of axios
export const triviaAPI = axios.create({
  baseURL: 'https://opentdb.com/api.php',
  responseType: 'json',
});
