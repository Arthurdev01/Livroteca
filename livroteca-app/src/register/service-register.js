import axios from 'axios';

const registerUser = async (formData) => {
  try {
    
    const response = await axios.post('http://localhost:8080/api/usuario', {
      nome: formData.name,
      email: formData.email,
      senha: formData.password
    });

    
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar o usuário:', error.response.data);
    throw error.response.data;
  }
};

export default registerUser;
