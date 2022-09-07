import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto, conectado, remove }) => {

    function ContactoConectadoIcon() {
        if (!contacto.conectado) {
            return (<i onClick={() => conectado(contacto)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
        } else {
            return (<i onClick={() => conectado(contacto)} className='bi-toggle-off task-action' style={{ color: 'grey' }}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contacto.name}</span>
            </th>
            <td className='align-middle'>
                {/* Execution of function to return icon depending on completion */}
                {ContactoConectadoIcon()}
                <i className='bi-trash task-action' style={{ color: 'tomato' }} onClick={() => remove(contacto)}></i>
            </td>
        </tr>
    );
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    conectado: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactoComponent;
