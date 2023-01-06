import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;
  
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}${url}`);
    return data;
    
}