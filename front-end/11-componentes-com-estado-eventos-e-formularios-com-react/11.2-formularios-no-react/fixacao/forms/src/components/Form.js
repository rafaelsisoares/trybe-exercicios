import React from "react";
import Description from "./Description";
import Races from "./Races";

class Form extends React.Component {
  state = {
    team: "",
    champion: "",
    races: 0,
    opinion: "",
    agreement: false,
    errorsDescription: false
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleErrors = (event) => {
    console.log(event.target);
  }
  render() {
    const { races, opinion } = this.state;
    return (
      <div>
        <h1>Formulário em React</h1>
        <form>
          <fieldset>
            <label>
              {" "}
              Escolha uma equipe:
              <select name="team" onChange={this.handleChange}>
                <option value="">Escolha uma opção...</option>
                <option value="mercedes">Mercedes</option>
                <option value="rbr">RedBull</option>
                <option value="sBinnala">Ferrari</option>
              </select>
            </label>
          </fieldset>
          <label>
            Quem ganhará o Mundial de Pilotos deste ano?
            <input type="text"
            name="champion"
            onChange={this.handleChange}
            />
          </label>
          <Races onChange={this.handleChange} value={races} handleErrors={this.handleErrors} />
          <Description onChange={this.handleChange} value={opinion} />
          <label>
            Autorizo o compartilhamento dos dados inseridos.
            <input
              type="checkbox"
              name="agreement"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Upload
            <input type="file" name="upload" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
