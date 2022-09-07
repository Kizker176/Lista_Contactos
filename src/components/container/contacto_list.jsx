import React, { useState, useEffect } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';
import ContactoFrom from '../pure/form/contactoFrom';

const ContactoListComponent = () => {

    const [contactos, setContacto] = useState([]);

    function ConectadoContacto(contacto) {
        console.log('Complete this Task:', contacto);
        const index = contactos.indexOf(contacto);
        const temTask = [...contactos];
        temTask[index].conectado = !temTask[index].conectado;
        //we update the state of the component and it will update the new list of task and it will update the
        // Iteration of the tasks in order to show the task updated
        setContacto(temTask);
    }

    function deleteContacto(contacto) {
        console.log('Delete this Task:', contacto);
        const index = contactos.indexOf(contacto);
        const temTask = [...contactos];
        temTask.splice(index, 1);
        setContacto(temTask);
    }

    function addContacto(contacto) {
        console.log('Add this Task:', contacto);
        const temTask = [...contactos];
        temTask.push(contacto);
        setContacto(temTask);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* card Header (title) */}
                    <div className='card-header p-3'>
                        <h5>Tus Contactos:</h5>
                    </div>
                    {/* Card body (content) */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* TODO: Iterar sobre una lista de taeras */}
                                {contactos.map((contacto, index) => {
                                    return (
                                        <ContactoComponent
                                            key={index}
                                            contacto={contacto}
                                            conectado={ConectadoContacto}
                                            remove={deleteContacto}
                                        >
                                        </ContactoComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactoFrom add={addContacto}></ContactoFrom>
            {/* TODO: Aplicar in For/Map para renderizar una lista */}
            {/* <TaskComponent task={defaultTask}></TaskComponent> */}
        </div>
    );
}

export default ContactoListComponent;
