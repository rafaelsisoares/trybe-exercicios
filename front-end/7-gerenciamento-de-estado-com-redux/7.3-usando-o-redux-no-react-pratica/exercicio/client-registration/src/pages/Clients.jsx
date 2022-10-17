import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeClient } from "../redux/actions";

class Clients extends React.Component {
  handleClick = ({target}) => {
    const {dispatch} = this.props;
    dispatch(removeClient(+target.id));
  }
  render() {
    const { login, clients } = this.props;
    return (
      <section>
        {!login ? (
          <h1>Login não efetuado!</h1>
        ) : (
          <div>
            <h1>Clientes Cadastrados</h1>
            {clients.length === 0 ? (
              <h4>Nenhum cliente cadastrado</h4>
            ) : (
              clients.map(({ name, age, email }, i) => (
                <div key={name}>
                  <h3>Nome: {name}</h3>
                  <p>E-mail: {email}</p>
                  <p>Idade: {age}</p>
                  <button type="button" id={i} onClick={this.handleClick}>Excluir</button>
                </div>
              ))
            )}
            <Link to="/registration">Cadastre um novo cliente</Link>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = ({ loginReducer, addClient }) => ({
  login: loginReducer.login,
  clients: addClient.clients,
});

export default connect(mapStateToProps)(Clients);
