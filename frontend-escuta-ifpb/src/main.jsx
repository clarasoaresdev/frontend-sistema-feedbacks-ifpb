import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'


//fazendo a configuração do router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './routes/Home.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Login from './routes/Login.jsx'
import Registros from './routes/Registros.jsx' 

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/Home",
        element: <Home/>
      },
      {
        path: "/Cadastro",
        element: <Cadastro/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Login/Registros",
        element: <Registros/>
      },
    ]
  },
]);


//colocando p o react renderizar na DOM 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
);
