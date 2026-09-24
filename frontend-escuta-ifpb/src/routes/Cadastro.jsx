import '../styles/cadastroStyles.css'
import 'bootswatch/dist/zephyr/bootstrap.min.css';

const Cadastro = () => {
   return(
        <>
        <form id="cadastro">
            <fieldset>
                <div className="field">
                    <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className="field">
                    <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
                </div>
                <div className="field">
                    <label for="exampleInputPassword1" className="form-label mt-4">Confirm your password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"></input>
                </div>
            </fieldset>
        </form>
    </>
   );
};
export default Cadastro;