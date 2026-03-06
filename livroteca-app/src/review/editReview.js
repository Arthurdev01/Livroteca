import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { buscarResenha, atualizarResenha } from './service-Review';
import './reviewForm.css';

const EditReview = () => {
  const { id_resenha, id_biblioteca } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nota: '',
    comentario: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const fetchResenha = async () => {
      try {
        const resenha = await buscarResenha(id_resenha);
        setFormData({
          nota: resenha.nota,
          comentario: resenha.comentario,
        });
      } catch (error) {
        console.error('Erro ao buscar resenha:', error);
        setErrorMessage('Erro ao carregar a resenha.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchResenha();
  }, [id_resenha]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.nota < 1 || formData.nota > 5 || formData.comentario.trim() === '') {
      setErrorMessage('A nota deve estar entre 1 e 5, e o comentário é obrigatório.');
      return;
    }

    try {
      await atualizarResenha(id_resenha, formData);
      navigate(`/library/${id_biblioteca}`);
    } catch (error) {
      console.error('Erro ao atualizar resenha:', error);
      setErrorMessage('Erro ao atualizar a resenha.');
    }
  };


  return (
    <div className="full-screen-background">
      <div className="review-form-container">
        <h1>Editar Resenha</h1>
        {errorMessage && <p className="message">{errorMessage}</p>}
        {isLoading ? (
          <p>Carregando dados da resenha...</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nota (1 a 5):</label>
              <input
                type="number"
                name="nota"
                min="1"
                max="5"
                value={formData.nota}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Comentário:</label>
              <textarea
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Salvar Alterações</button>
          </form>
        )}
        <Link to={`/library/${id_biblioteca}`} className="back-to-home">
          Voltar para a Biblioteca
        </Link>
      </div>
    </div>
  );
};

export default EditReview;
