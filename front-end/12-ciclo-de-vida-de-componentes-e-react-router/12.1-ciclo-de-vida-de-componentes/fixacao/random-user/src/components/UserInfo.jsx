import React from "react";

const MAX_AGE = 50;

class UserInfo extends React.Component {
    state = {
        response: false,
        info: [],
      };

      fetchInfo = async () => {
        const urlToFetch = "https://api.randomuser.me/";
    try {
      const request = await fetch(urlToFetch);
      const data = await request.json();
      this.setState((prevState) => ({
        response: !prevState.response,
        info: data.results,
      }));
    } catch (e) {
      return e.message;
    }
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { info } = nextState;
    const { dob: { age }} = info[0];
    if (age <= MAX_AGE) return true;
    return false;
  }

  componentDidMount() {
    this.fetchInfo();
  }

  handleClick = () => {
    this.fetchInfo();
  }

  render() {
    const { info, response } = this.state;
    return (
      <section>
        {response ? (
          <div>Carregando...</div>
        ) : (
          info.map(
            ({
              name: { first, last },
              email,
              dob: { age },
              picture: { large },
              id: { value },
            }) => (
              <div key={value}>
                <h1>
                  {first} {last}
                </h1>
                <img src={large} alt={first} />
                <p>Email: {email}</p>
                <p>Idade: {age} anos</p>
                <button type="button" onClick={ this.handleClick }>Novo Usuário</button>
              </div>
            )
          )
        )}
      </section>
    );
  }
}

export default UserInfo;
