// src/book/editBook/EditBook.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getBookById, updateBook } from './service-Book'; 
import { getCategorias } from '../category/service-category'; 
import './editBook.css';

const EditBook = () => {
  const { id_livro, id_biblioteca } = useParams(); 
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    id_categoria: '',
    autor: '',
    titulo: '',
  });
  const [categorias, setCategorias] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchCategorias = async () => {
      try {
        const data = await getCategorias();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    const fetchBook = async () => {
      try {
        const book = await getBookById(id_livro);
        console.log(book);
        if (book && book.livro) {
          setFormData({
            id_categoria: book.livro.id_categoria,
            autor: book.livro.autor,
            titulo: book.livro.titulo,
          });
        }
      } catch (error) {
        console.error('Erro ao buscar livro:', error);
        setMessage('Erro ao carregar os dados do livro.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
    fetchBook(); 
  }, [id_livro]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id_livro, formData.id_categoria, formData.autor, formData.titulo);
      setMessage('Livro atualizado com sucesso!');
      navigate(`/library/${id_biblioteca}`);
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
      setMessage('Erro ao atualizar livro.');
    }
  };

  if (loading) {
    return <p>Carregando dados do livro...</p>;
  }

  return (
    <div className="full-screen-background">
      <div className="book-form-container">
        <h2>Edição de Livro</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Categoria:</label>
            <select
              name="id_categoria"
              value={formData.id_categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.length > 0 ? (
                categorias.map((categoria) => (
                  <option key={categoria.id_categoria} value={categoria.id_categoria}>
                    {categoria.nome_categoria}
                  </option>
                ))
              ) : (
                <option value="" disabled>Sem categorias disponíveis</option>
              )}
            </select>
          </div>
          <div>
            <label>Autor:</label>
            <input
              type="text"
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Título:</label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Atualizar Livro</button>
        </form>
        <Link to={`/library/${id_biblioteca}`} className="back-to-home">
          Voltar para a Biblioteca
        </Link>
      </div>
    </div>
  );
};

export default EditBook;
