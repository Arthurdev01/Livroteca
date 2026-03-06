import axios from 'axios';

const loginUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/usuario/login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default loginUser;
