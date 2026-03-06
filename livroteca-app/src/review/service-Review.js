import axios from 'axios';

const API_URL = 'http://localhost:8080/api/resenha';

export const adicionarResenha = async (idLivro, resenhaData) => {
  try {
    const response = await axios.post(`${API_URL}/`, { ...resenhaData, id_livro: idLivro });
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar resenha:', error.response?.data || error.message);
    throw error;
  }
};

export const atualizarResenha = async (id_resenha, dados) => {
  try {
    const response = await axios.put(`${API_URL}/${id_resenha}`, dados);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar resenha:', error.response?.data || error.message);
    throw error;
  }
};

export const buscarResenha = async (id_resenha) => {
  try {
    const response = await axios.get(`${API_URL}/${id_resenha}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar resenha:', error.response?.data || error.message);
    throw error;
  }
};


const reviewService = {
  adicionarResenha,
  atualizarResenha,
  buscarResenha,
};


export default reviewService;
