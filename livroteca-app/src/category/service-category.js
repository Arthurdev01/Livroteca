const api_url = 'http://localhost:8080/api/categorias';

export const getCategorias = async () => {
  try {
    const response = await fetch(api_url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar categorias: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
};

export const getLivrosPorCategoria = async (id_categoria) => {
  try {
    const response = await fetch(`${api_url}/${id_categoria}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar livros da categoria: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar livros por categoria:', error);
    throw error;
  }
};
