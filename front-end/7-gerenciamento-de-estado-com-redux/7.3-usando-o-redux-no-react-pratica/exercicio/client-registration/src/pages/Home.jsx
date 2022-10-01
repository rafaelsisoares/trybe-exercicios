import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component{
    render() {
        return(
            <section>
                <h1>Cadastro de Clientes</h1>
                <Link to='/login'>Fazer Login</Link>
            </section>
        )
    }
}

export default Home;