import React from "react";

class Races extends React.Component{
    render() {
        const { onChange, value } = this.props;
        return(
            <label>
            Quantas corridas você acha que o calendário deveria ter?
            <input type="number" name="races" onChange={ onChange } value={value}/>
          <p>
            {value <= '0' || !(value) ? 'Escolha um número de corridas válido' : ''}
          </p>
          </label>
        )
    }
}

export default Races;