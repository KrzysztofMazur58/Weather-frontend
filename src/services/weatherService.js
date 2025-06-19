import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

export async function getForecast(lat, lon) {
  const res = await axios.get(`${BASE_URL}/daily`, {
    params: { latitude: lat, longitude: lon },
  });
  return res.data;
}

export async function getSummary(lat, lon) {
  const res = await axios.get(`${BASE_URL}/summary`, {
    params: { latitude: lat, longitude: lon },
  });
  return res.data;
}

