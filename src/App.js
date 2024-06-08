import logo from './logo.svg';
import './App.css';
import AddPost from './componenets/AddPost';
import SearchPost from './componenets/SearchPost';
import DeletePost from './componenets/DeletePost';
import ViewallPost from './componenets/ViewallPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/search' element={<SearchPost/>}/>
      <Route path='/delete' element={<DeletePost/>}/>
      <Route path='/view' element={<ViewallPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
