import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL;
  
export const fetchFromAPI = async (url, cancelToken) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, {cancelToken: cancelToken.token});
    return data;
    
}