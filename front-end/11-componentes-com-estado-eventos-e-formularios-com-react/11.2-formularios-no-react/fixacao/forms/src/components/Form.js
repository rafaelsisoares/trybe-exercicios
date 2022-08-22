import React from "react";

class Form extends React.Component{

    state = {
        team: '',
    }

    handleSelectChange = (event) => {
        this.setState({ team: event.target.value});
    }
    render() {
        return(
            <div>
                <h1>Formulário em React</h1>
                <form>
                    <label> Escolha uma equipe:
                        <select name="team" onChange={this.handleSelectChange}>
                            <option value="">Escolha uma opção...</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="rbr">RedBull</option>
                            <option value="sBinnala">Ferrari</option>
                        </select>
                    </label>
                    <label>Quem ganhará o Mundial de Pilotos deste ano?
                        <input type="text" name="champion" />
                    </label>
                    <label>Quantas corridas você acha que o calendário deveria ter?
                        <input type="number" name="races" />
                    </label>
                    <label>Descreva o que é a F1 para você
                        <textarea name="opinion" />
                    </label>
                </form>
            </div>
        )
    }
}

export default Form;