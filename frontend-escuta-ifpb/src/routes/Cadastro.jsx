import { Link } from 'react-router-dom';
import '../styles/cadastroStyles.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css';

const Cadastro = () => {
   return(
        <> 
        <form id="cadastro">
            <h1 id="titulo-cad">Cadastro</h1>
            <fieldset id="fieldset-cad">
                 <div className="field-cad">
                    <label for="exampleInputEmail1" className="form-label mt-4">Digite seu CPF ou Matrícula:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir CPF ou email"></input>
                </div>
                <div className="field-cad">
                    <label for="exampleInputEmail1" className="form-label mt-4">Digite seu nome:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir nome"></input>
                </div>
                  <div className="field-cad">
                    <label for="exampleInputEmail1" className="form-label mt-4">Cadastre seu email:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserir email"></input>
                </div>
                 <div>
                    <label for="exampleSelect1" class="form-label mt-4" style={{color: 'white'}}>Selecione o tipo de membro</label>
                    <select class="form-select" id="exampleSelect1">
                        <option>Estudante</option>
                        <option>Pai/Responsável</option>
                        <option>Servidor</option>
                        <option>Servidor Gestor</option>
                    </select>
                </div>
                <div className="field-cad">
                    <label for="exampleInputPassword1" className="form-label mt-4">Crie sua senha:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
                </div>
                <div className="field-cad">
                    <label for="exampleInputPassword1" className="form-label mt-4">Confirme sua senha:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
                </div>
                <div id="volta-login">
                    <label>Já possui uma conta?</label><Link to="/Login"><a style={{color: 'white'}}>Faça login</a></Link>
                 </div>
            </fieldset>
        </form>
    </>
   );
};
export default Cadastro;