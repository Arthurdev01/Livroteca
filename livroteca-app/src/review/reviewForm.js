import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { adicionarResenha } from './service-Review';
import './reviewForm.css';

const ReviewForm = () => {
  const { id_livro, id_biblioteca } = useParams();
  const navigate = useNavigate();
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!id_livro || !nota || !comentario) {
      setMensagem('Todos os campos são obrigatórios');
      return;
    }
  
    try {
      await adicionarResenha(id_livro, { nota, comentario });
      setMensagem('Resenha adicionada com sucesso!');
      
      navigate(`/library/${id_biblioteca}`);
    } catch (error) {
      setMensagem('Erro ao adicionar resenha');
      console.error(error);
    }
  };
  
  return (
    <div className="full-screen-background">
      <div className="review-form-container">
        <h2>Adicionar Resenha</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nota:</label>
            <input 
              type="number" 
              value={nota} 
              onChange={(e) => setNota(e.target.value)} 
              min="1" max="5" 
              required 
            />
          </div>
          <div>
            <label>Comentário:</label>
            <textarea 
              value={comentario} 
              onChange={(e) => setComentario(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Adicionar Resenha</button>
          {mensagem && <p className={`message ${mensagem.includes('sucesso') ? 'success' : ''}`}>{mensagem}</p>}
        </form>
        <Link to={`/library/${id_biblioteca}`} className="back-to-home">
          Voltar para a Biblioteca
        </Link>
      </div>
    </div>
  );
};

export default ReviewForm;
