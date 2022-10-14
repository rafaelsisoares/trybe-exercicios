import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <section className="container sm mx-auto px-100">
        <h1>Cadastro de Clientes</h1>
        <Link to="/login">Fazer Login</Link>
      </section>
    );
  }
}

export default Home;
