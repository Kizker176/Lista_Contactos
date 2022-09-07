import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../../models/contacto.class';

const ContactoFrom = ({ add }) => {

    const nameRef = useRef('');

    function addContacto(e) {
        e.preventDefault();
        const newContacto = new Contacto(
            nameRef.current.value,
            true,
        );
        add(newContacto);
    }

    return (
        <form onSubmit={addContacto} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='from-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Nombre de Contacto'>
                </input>
            </div>
            <button type='submit' className=' btn btn-success btn-lg ms-2'>Add</button>
        </form>
    );
}

ContactoFrom.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactoFrom;
