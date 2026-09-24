import '../styles/navBarStyles.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css';
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <header id="header">
                <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="#">EscutaIFPB</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/Home"><a className="nav-link active" href="#">Home</a></Link>
                        </li>           
                        </ul>
                        <form className="d-flex">
                            <Link to="/Login">
                                <button type="button" className="btn btn-secondary">Login</button>
                            </Link>
                            <Link to="/Cadastro">
                                <button type="button" className="btn btn-dark">Cadastre-se</button>
                            </Link>
                        </form>
                    </div>
                </nav>
            </header>
        </>
   )
};

export default Navbar