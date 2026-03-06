import axios from 'axios';

const getBooksByUserId = async (idUsuario) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/biblioteca/${idUsuario}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getLivrosPorCategoria = async (idUsuario, idCategoria) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/biblioteca/${idUsuario}/livros/categoria/${idCategoria}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export { getBooksByUserId, getLivrosPorCategoria };
