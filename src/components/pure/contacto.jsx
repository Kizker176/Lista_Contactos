import React from 'react';

const ContactoComponent = ({ contacto, conectado, remove }) => {
    return (
        <div className="contact-component">
            <h2>{contacto.nombre}</h2>
            <span>{contacto.email}</span>

            <button
                style={{ backgroundColor: contacto.conectado ? 'green' : 'red' }}
                className="state-button"
                onClick={() => {
                    conectado(contacto);
                }}
            >
                {contacto.conectado ? 'Conectado' : 'Desconectado'}
            </button>

            <button className="remove-button" onClick={() => remove(contacto)}>
                Borrar
            </button>
        </div>
    );
}

export default ContactoComponent;
