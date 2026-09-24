import { useState } from 'react'
import imagemFundo from './assets/wallpaper-1200-t2.jpg'
import './App.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={imagemFundo} className="background" alt="imagem de fundo" />
    <header id="header">
      <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">EscutaIFPB</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>           
            </ul>
            <form className="d-flex">
              <button type="button" className="btn btn-secondary">Login</button>
              <button type="button" className="btn btn-dark">Cadastre-se</button>
            </form>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <article>
        <h1 id="titulo">Seja Bem Vindo(a) {'\u{1F4E2}'}</h1>
        <p>
          O <strong>sistema de escuta do IFPB</strong> tem como propósito garantir, de forma democrática, um espaço de escuta ativa para todos da comunidade acadêmica  – professores, estudantes, pais ou responsáveis e servidores em geral.
          Esse sistema permitirá que membros do IFPB se posicionem acerca de situações vivenciadas na instituição, oferecendo a todos, a oportunidade de expressarem suas perspectivas.
        </p>
      </article>
    </main>

   
    </>
  )
}

export default App
