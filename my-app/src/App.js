import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './component/BookList/BookList';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/bookstore-app/' element={<BookList />}/>
      </Routes>
    </>
  );
}

export default App;
