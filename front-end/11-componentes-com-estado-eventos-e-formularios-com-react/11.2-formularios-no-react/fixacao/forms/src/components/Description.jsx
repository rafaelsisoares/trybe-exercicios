import React from "react";

class Description extends React.Component {
    render() {
        const { onChange, value } = this.props;
    return (
      <fieldset>
        <label>
          Descreva o que é a F1 para você
          <textarea name="opinion" onChange={ onChange } value={ value } />
        </label>
        <p>{value.length === 0 || value.length > 100 ? 'Digite um texto com até 100 caracteres'
        : ''}
        </p>
      </fieldset>
    );
  }
}

export default Description;
