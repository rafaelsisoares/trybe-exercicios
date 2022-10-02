import React from "react";

class FormRegistration extends React.Component{
    state = {
        name: '',
        email: '',
        age: '',
    }
    render() {
        return(
            <form>
                <label htmlFor='name'>
                    Nome:
                    <input type='text' id="name"/>
                </label>
                <label htmlFor='email'>
                    E-mail:
                    <input type='email' id="email"/>
                </label>
                <label htmlFor='age'>
                    Idade:
                    <input type='number' id="age"/>
                </label>
                <button type="button">Cadastrar</button>
            </form>
        );
    }
}

export default FormRegistration;