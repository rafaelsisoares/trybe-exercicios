import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Clients extends React.Component {
  render() {
    const { login, clients } = this.props;
    return (
      <section>
        {!login ? (
          <h1>Login não efetuado!</h1>
        ) : (
          <div>
            <h1>Clientes Cadastrados</h1>
                {
                    clients.length === 0 ? <h4>Nenhum cliente cadastrado</h4>
                    : (
                        clients.map(({name, age, email, id}) => (
                            <div key={id}>
                                <h2>Nome: {name}</h2>
                                <p>E-mail: {email}</p>
                                <p>Idade: {age}</p>
                            </div>
                        ))
                    )
                }
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
