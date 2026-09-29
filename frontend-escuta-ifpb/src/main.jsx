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
import  PrivateRoute from './routes/PrivateRoute.jsx';

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Cadastro",
        element:<Cadastro/>
      },
      {
        path: "/Login",
        element:<Login/>
      },
      {
        path: "/Registros",
        element:(<PrivateRoute> 
                    <Registros/>
                 </PrivateRoute>)
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
