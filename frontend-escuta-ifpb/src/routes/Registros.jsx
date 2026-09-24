import '../styles/homeStyles.css';
import {Link} from 'react-router-dom';

const Registros = () => {
   return(
    <>
     <header id="header">
        <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to="/Home"><a className="nav-link active" href="#">Home</a></Link>s
                    </li>           
                </ul>
                <form className="d-flex">
                    <Link to="/Home">
                        <button type="button" className="btn btn-secondary">Sair</button>
                    </Link>
                    <Link to="/b"> {/8backend*/}
                        <button type="button" className="btn btn-dark">Pesquisar</button>
                    </Link>
                </form>
            </div>
        </nav>
    </header>
    <main>
        <h1>Registros</h1>
        <Link to="/b"> {/8backend*/}
            <button type="button" className="btn btn-dark">Regitro</button>
        </Link>
    </main>
    </>
   );
};
export default Registros;