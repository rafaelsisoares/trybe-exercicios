import React from "react";
import { connect } from "react-redux";

import { loginAction } from "../redux/actions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    buttonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { id, value } = target;
    this.setState({ [id]: value }, () => {
      const { email, password } = this.state;
      const emailValidation = email.split("@");
      if (
        emailValidation.length === 2 &&
        emailValidation[1].includes(".com") &&
        password.length >= 8
      ) {
        this.setState({ buttonDisabled: false });
      } else {
        this.setState({ buttonDisabled: true });
      }
    });
  };

  handleClick = () => {
    const { dispatch, history } = this.props;
    dispatch(loginAction());
    history.push("/clients");
  };

  render() {
    const { buttonDisabled } = this.state;
    return (
      <section>
        <h1>Faça seu login</h1>
        <label htmlFor="email">
          E-mail:
          <input type="email" id="email" onChange={this.handleChange} />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" onChange={this.handleChange} />
        </label>
        <button
          type="button"
          disabled={buttonDisabled}
          onClick={this.handleClick}
        >
          Entrar
        </button>
      </section>
    );
  }
}
export default connect()(Login);
