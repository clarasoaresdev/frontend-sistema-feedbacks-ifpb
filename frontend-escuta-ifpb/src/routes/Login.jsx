import '../styles/loginStyles.css';
import { Link } from 'react-router-dom';
const Login = () => {
   return(
    <>
    <form id="login">
            <h1 id="titulo-login">Login</h1>
            <fieldset id="fieldset-login">
                 <div className="field-login">
                    <label for="exampleInputEmail1" className="form-label mt-4">Digite seu CPF ou Matrícula:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir CPF ou email"></input>
                </div>
                <div className="field-login">
                    <label for="exampleInputPassword1" className="form-label mt-4">Digite sua senha:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
                </div>
                <div id="ir-cadastro">
                    <label>Ainda não possui uma conta?</label><Link to="/Cadastro"><a style={{color: 'white'}}>Cadastre-se</a></Link>
                 </div>
            </fieldset>
        </form>
    </>
   ) ;
};
export default Login;