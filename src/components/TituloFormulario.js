import React from 'react';
import Formulario from './Formulario';
import '../App.css'
const TituloFormulario = () => {
    return (
        <div className='bg-dark container my-5 rounded px-0 '>
            <h2 className='text-light display-5 text-center py-5 bg-form rounded'>Formulario</h2>
            <Formulario></Formulario>
        </div>
    );
};

export default TituloFormulario;