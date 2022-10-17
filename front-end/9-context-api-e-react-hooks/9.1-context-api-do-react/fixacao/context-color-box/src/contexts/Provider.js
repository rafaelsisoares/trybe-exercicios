import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorContext from './ColorContext';

class Provider extends Component {
// Estado inicial que armazena a lista de cores e o index
    state = {
        colors: ['blue', 'red', 'yellow'],
        index: 0,
    }
// Função que altera a cor da div
    changeColor = () => {
        const { index, colors } = this.state;
        (index < (colors.length - 1)) ? this.setState((prevState) => ({
            index: prevState.index + 1,
        }))
        : this.setState({ index: 0 });
    }

  render() {
    // Objeto que será passado ao provider como value
    const context = {
        ...this.state,
        changeColor: this.changeColor,
    }
    // children será o componente que proverá as informações para outros componentes
    const { children } = this.props;
    return (
        <ColorContext.Provider value={context}>
            {children}
        </ColorContext.Provider>
    );
  }
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Provider;
