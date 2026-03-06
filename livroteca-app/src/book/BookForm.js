import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { addBook } from './service-Book';
import { getCategorias } from '../category/service-category';
import './bookForm.css';

const BookForm = () => {
  const { id_biblioteca } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_categoria: '',
    autor: '',
    titulo: '',
  });

  const [categorias, setCategorias] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const data = await getCategorias();
        console.log(data);
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategorias();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0];

    try {
      await addBook(id_biblioteca, formData.id_categoria, formData.autor, formData.titulo, currentDate);
      setMessage('Livro cadastrado com sucesso!');
      navigate(`/library/${id_biblioteca}`);
    } catch (error) {
      console.error('Erro ao adicionar livro:', error);
      setMessage('Erro ao adicionar livro.');
    }
  };

  return (
    <div className="full-screen-background">
      <div className="book-form-container">
        <h2>Cadastro de Livro</h2>
        {message && <p>{message}</p>}
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
          <button type="submit">Cadastrar Livro</button>
        </form>
        <Link to={`/library/${id_biblioteca}`} className="back-to-home">
          Voltar para a Biblioteca
        </Link>
      </div>
    </div>
  );
};

export default BookForm;
