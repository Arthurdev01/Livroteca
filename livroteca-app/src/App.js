import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import HomePage from './home/HomePage';
import RegisterPage from './register/RegisterPage';
import LoginPage from './login/LoginPage';
import LibraryPage from './library/LibraryPage';
import BookForm from './book/BookForm';
import EditBook from './book/editBook';
import ReviewForm from './review/reviewForm';
import EditReview from './review/editReview';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/library/:id_biblioteca" element={<LibraryPage />} />
        <Route path="/book/:id_biblioteca" element={<BookForm />} />
        <Route path="/book/editBook/:id_livro/:id_biblioteca" element={<EditBook />} />
        <Route path="/review/reviewForm/:id_livro/:id_biblioteca" element={<ReviewForm />} />
        <Route path="/review/editReview/:id_resenha/:id_biblioteca" element={<EditReview />} />
      </Routes>
    </Router>
  );
}

export default App;
