import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBooksByUserId, getLivrosPorCategoria } from './service-Library';
import { getCategorias } from '../category/service-category';
import './library.css';

const LibraryPage = () => {
  const { id_biblioteca } = useParams();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const userBooks = await getBooksByUserId(id_biblioteca);
        setBooks(userBooks);
        setFilteredBooks(userBooks);
      } catch (error) {
        setErrorMessage(error.message || 'Erro ao carregar livros.');
      } finally {
        setLoading(false);
      }
    };

    const fetchCategorias = async () => {
      try {
        const categoriasList = await getCategorias();
        setCategorias(categoriasList);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      }
    };

    fetchBooks();
    fetchCategorias();
  }, [id_biblioteca]);

  const handleCategoriaChange = async (event) => {
    const idCategoria = event.target.value;
    setSelectedCategoria(idCategoria);

    if (idCategoria) {
      try {
        const filtered = await getLivrosPorCategoria(id_biblioteca, idCategoria);
        setFilteredBooks(filtered);
        setErrorMessage(filtered.length === 0 ? 'Nenhum livro encontrado para esta categoria.' : '');
      } catch (error) {
        setErrorMessage(error.message || 'Erro ao carregar livros dessa categoria.');
        setFilteredBooks([]);
      }
    } else {
      setFilteredBooks(books);
      setErrorMessage('');
    }
  };

  if (loading) {
    return <p>Carregando livros...</p>;
  }

  return (
    <div className="library-container">
      <h1 className="library-title">Minha Biblioteca</h1>

      <nav className="navbar">
        <Link to={`/book/${id_biblioteca}`} className="add-book-link">Adicionar Livro</Link>
        <select 
          id="category-select" 
          value={selectedCategoria} 
          onChange={handleCategoriaChange} 
          className="nav-button category-select"
          aria-label="Selecionar Categoria"
        >
          <option value="">Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria.id_categoria} value={categoria.id_categoria}>
              {categoria.nome_categoria}
            </option>
          ))}
        </select>
      </nav>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id_livro} className="book-item">
              <p><strong>Autor:</strong> {book.autor}</p>
              <p><strong>Livro:</strong> {book.titulo}</p>
              <p><strong>Categoria:</strong> {book.nome_categoria || 'Categoria não disponível'}</p>
              <p><strong>Data da inclusão:</strong> {book.data_inclusao ? new Date(book.data_inclusao).toLocaleDateString() : 'Data não disponível'}</p>
              
              {book.resenhas && book.resenhas.length > 0 ? (
                <div className="reviews-section">
                  {book.resenhas.map((resenha) => (
                    <div key={resenha.id_resenha} className="review-item">
                      <p><strong>Nota:</strong> {resenha.nota}</p>
                      <p><strong>Comentário:</strong> {resenha.comentario}</p>
                      <p><strong>Data da Resenha:</strong> {new Date(resenha.data_resenha).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Este livro ainda não tem resenhas.</p>
              )}

              <div className="button-container">
                <Link to={`/book/editBook/${book.id_livro}/${id_biblioteca}`} className="edit-book-link">Editar Livro</Link>
                {(!book.resenhas || book.resenhas.length === 0) && (
                  <Link to={`/review/reviewForm/${book.id_livro}/${id_biblioteca}`} className="add-review-link">Adicionar Resenha</Link>
                )}
                {book.resenhas && book.resenhas.length > 0 && (
                  <Link to={`/review/editReview/${book.resenhas[0].id_resenha}/${id_biblioteca}`} className="edit-review-link">Editar Resenha</Link>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum livro encontrado.</p>
        )}
      </div>

      <Link to="/" className="back-to-home">Voltar para Home</Link>
    </div>
  );
};

export default LibraryPage;
