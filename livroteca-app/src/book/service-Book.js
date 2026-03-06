import axios from 'axios';

const API_URL = 'http://localhost:8080/api/livro/livro';

const addBook = async (idBiblioteca, idCategoria, autor, titulo, dataInclusao) => {
  try {
    const formattedDate = dataInclusao ? dataInclusao.split('T')[0] : new Date().toISOString().split('T')[0];
    
    const response = await axios.post(API_URL, {
      id_biblioteca: idBiblioteca,
      id_categoria: idCategoria,
      autor,
      titulo,
      data_inclusao: formattedDate
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar o livro:', error);
    throw error.response.data || 'Erro desconhecido ao adicionar o livro';
  }
};

const getBookById = async (idLivro) => {
  try {
    const response = await axios.get(`${API_URL}/${idLivro}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar o livro:', error);
    throw error.response.data || 'Erro desconhecido ao buscar o livro';
  }
};

const updateBook = async (idLivro, idCategoria, autor, titulo) => {
    
    if (!idLivro || !idCategoria || !autor || !titulo) {
      throw new Error('Todos os campos devem ser preenchidos.');
    }
  
    try {

      const response = await axios.put(`${API_URL}/${idLivro}`, {
        id_categoria: idCategoria,
        autor,
        titulo,
      });

      return response.data;
    } catch (error) {

      console.error('Erro ao atualizar o livro:', error);
      throw error.response?.data || 'Erro desconhecido ao atualizar o livro';
    }
  };

export { addBook, getBookById, updateBook };
