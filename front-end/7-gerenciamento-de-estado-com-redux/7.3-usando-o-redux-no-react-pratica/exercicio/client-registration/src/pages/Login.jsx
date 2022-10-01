import React from "react";

class Login extends React.Component {
  render() {
    return (
      <section>
        <h1>Faça seu login</h1>
        <label htmlFor="email">
          E-mail:
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
            Senha:
            <input type='password' id='password' />
        </label>
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
