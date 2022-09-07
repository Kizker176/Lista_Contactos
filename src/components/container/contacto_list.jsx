import React, { useState } from 'react';
import ContactoComponent from '../pure/contacto';
import ContactoFrom from '../pure/form/contactoFrom';

const ContactoListComponent = () => {

    const [contactos, setContacto] = useState([]);

    function ConectadoContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const temContacto = [...contactos];
        temContacto[index].conectado = !temContacto[index].conectado;
        //we update the state of the component and it will update the new list of task and it will update the
        // Iteration of the tasks in order to show the task updated
        setContacto(temContacto);
    }

    function deleteContacto(contacto) {
        const index = contactos.indexOf(contacto);
        const temContacto = [...contactos];
        temContacto.splice(index, 1);
        setContacto(temContacto);
    }

    function addContacto(contacto) {
        const temContacto = [...contactos];
        temContacto.push(contacto);
        setContacto(temContacto);
    }

    return (
        <div>
            <div className='col-12'>
                <h1>Contactos</h1>

                <div className="card-container">
                    {contactos.map((contacto, index) => {
                        return (
                            <ContactoComponent key={index} contacto={contacto} conectado={ConectadoContacto} remove={deleteContacto} />
                        );
                    })}
                </div>

            </div>
            <ContactoFrom add={addContacto}></ContactoFrom>
        </div>
    );
}

export default ContactoListComponent;
