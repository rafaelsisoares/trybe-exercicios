import React from "react";
import { addClient } from "../redux/actions";

class FormRegistration extends React.Component{
    state = {
        name: '',
        email: '',
        age: '',
    }

    handleChange = ({target}) => {
        const {id, value} = target;
        this.setState({[id]: value});
    }

    handleClick = () => {
        const {dispatch, history} = this.props;
        dispatch(addClient(this.state));
        history.push('/clients');
    }

    render() {
        return(
            <form>
                <label htmlFor='name'>
                    Nome:
                    <input type='text' id="name" onChange={this.handleChange} />
                </label>
                <label htmlFor='email'>
                    E-mail:
                    <input type='email' id="email" onChange={this.handleChange} />
                </label>
                <label htmlFor='age'>
                    Idade:
                    <input type='number' id="age" onChange={this.handleChange} />
                </label>
                <button type="button" onClick={this.handleClick}>Cadastrar</button>
            </form>
        );
    }
}

export default FormRegistration;