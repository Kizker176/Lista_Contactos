import React, { useRef } from 'react';

const ContactoFrom = ({ add }) => {

    const nameRef = useRef('');
    const email = useRef('');

    function addContacto(e) {
        e.preventDefault();
        const newContacto = {
            nameRef: nameRef.current.value,
            email: email.current.value,
            conectado: true
        };
        add(newContacto);
        nameRef.current.value = '';
        email.current.value = '';
    }

    return (
        <form onSubmit={addContacto} className="contact-component">
            <h2>Añadir Contacto: </h2>
            <input ref={nameRef} name="name" placeholder="Nombre contacto" className="form-control mb-2" />
            <input ref={email} name="email" type="email" placeholder="Email contacto" />
            <button onClick={addContacto} type="submit" className="submit-button">
                Añadir
            </button>
        </form>
    );
}

export default ContactoFrom;
