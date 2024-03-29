import React from "react";
import { connect } from "react-redux";

import FormRegistration from "../components/FormRegistration";

class Registration extends React.Component {
  render() {
    const { login, dispatch, history } = this.props;
    return (
      <section>
        {login ? (
          <FormRegistration dispatch={dispatch} history={history} />
        ) : (
          <h1>Login não efetuado</h1>
        )}
      </section>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  login: loginReducer.login,
});

export default connect(mapStateToProps)(Registration);
