import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import Content from './pages/Content/Content';
import ProductDetail from './pages/ProductDetail/ProductDetail';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path='/dashboard' element={<MainLayout />}>
            <Route path='' element={<Content />} />
            <Route path='productDetail' element={<ProductDetail/>} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
