import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorContext from './ColorContext';

class Provider extends Component {
    state = {
        colors: ['blue', 'red', 'yellow'],
        index: 0,
    }

    changeColor = () => {
        const { index, colors } = this.state;
        (index < (colors.length - 1)) ? this.setState((prevState) => ({
            index: prevState.index + 1,
        }))
        : this.setState({ index: 0 });
    }

  render() {
    const context = {
        ...this.state,
        changeColor: this.changeColor,
    }
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
