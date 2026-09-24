import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import imagemFundo from './assets/wallpaper-1200-t2.jpg';
import './App.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={imagemFundo} className="background" alt="imagem de fundo" />
    <Navbar/>
    <Outlet></Outlet>
    </>
  )
}

export default App
