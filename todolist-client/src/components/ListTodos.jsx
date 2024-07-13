import React from 'react';

const ListTodos = ({ todoArray, handleCheck, toggleTodo, setFormDataWithTodoInfo, handleModal }) => {
    return (
        <div className='listado-tareas'>
            {
                todoArray?.length > 0
                    ?
                    todoArray?.map(item => (
                        <div className='list-group-item d-flex align-items-center shadow' key={item.id}>
                            <input type="checkbox" className='form-check-input border border-primary' checked={item.estado} onChange={() => handleCheck(item.estado)} onClick={() => toggleTodo(item.id)} />
                            <p className={`descripcion fw-bold p-0 mx-2 flex-grow-1 ${item.estado ? 'text-decoration-line-through' : ''}`}>
                                {item.titulo}
                                <br />
                                <span className='fw-normal text-muted'>{item.descripcion}</span>
                            </p>
                            {item.estado && <span className='m-2 badge btn-complete'>Completada</span>}
                            <button className='btn btn-primary mx-1' onClick={() => setFormDataWithTodoInfo(item.id)}>✏️</button>
                            <button className='btn btn-danger mx-1' onClick={() => handleModal(item)}>🗑️</button>
                        </div>
                    ))
                    :
                    <p className='mt-3 alert alert-success'>Todavía no has agregado tareas. <span className='fs-5'>📝</span></p>
            }
        </div>
    );
};

export default ListTodos;
