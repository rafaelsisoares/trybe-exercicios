import { Component } from "react";

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemonList;
        return(
        <li>{name} {type} {averageWeight.value}{averageWeight.measurementUnit}
        <div>
            <img src={image} alt={name}></img>
        </div>
        </li>);
    }
}

export default Pokemon;