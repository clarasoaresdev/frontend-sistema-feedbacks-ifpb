import { useState } from 'react'
import imagemFundo from './assets/wallpaper-1200-t2.jpg'
import './App.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light" data-bs-theme="light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">EscutaIFPB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            {/*<input class="form-control me-sm-2" type="text" placeholder="Pesquisar" value={texto} onChange={(e) => setTexto(e.target.value)} />*/}
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <main>
      <article>
        <h1 id="aaa">Seja Bem Vindo(a)</h1>
        <p>
          O sistema de feedback do IFPB tem como propósito garantir, de forma democrática, um espaço de escuta ativa para todos da comunidade acadêmica  – professores, estudantes, pais ou responsáveis e servidores em geral.
          Esse sistema permitirá que membros do IFPB se posicionem acerca de situações vivenciadas na instituição, oferecendo a todos, a oportunidade de expressarem suas perspectivas.
        </p>
        <img src={imagemFundo} className="background" alt="imagem de fundo" />
      </article>
    </main>

   
    </>
  )
}

export default App
