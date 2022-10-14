import React from 'react';
import ColorContext from '../contexts/ColorContext';
import '../styles/box.css';
class ColorBox extends React.Component {
  render() {
    // Os elementos passados como value no Provider são acessados aqui
    const { colors, index, changeColor } = this.context;
    return(
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[index] } }
        onClick={ changeColor }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = ColorContext

export default ColorBox;
