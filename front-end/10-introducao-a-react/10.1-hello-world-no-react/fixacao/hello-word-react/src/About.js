import React from "react";

class About extends React.Component {
    render() {
        const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'DOM', 'HOFs', 'Consumo de API'];
        const jsxSkills = skills.map((skill) => <li>{skill}</li>);
        return <section>
            <h1>Rafael</h1>
            <p>Meu nome é Rafael, tenho 25 anos, sou de São Paulo, adoro tecnologia e automobilismo.</p>
            <h2>Minhas Habilidades</h2>
            <ul>{jsxSkills}</ul>
        </section>
    }
}

export default About;