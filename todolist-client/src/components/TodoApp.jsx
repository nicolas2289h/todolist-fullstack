import React, { useEffect, useRef, useState } from 'react'
import '../components/todolist.css'
import ModalDelete from './ModalDelete'
import axios from 'axios'
import ListTodos from './ListTodos'

const formValues = {
    id: null,
    titulo: '',
    descripcion: '',
    estado: false
}

const URL_BASE_API = 'https://giddy-goat-buckle.cyclic.app'

function TodoApp() {
    const [todoArray, setTodoArray] = useState([])
    const [idEdit, setIdEdit] = useState()
    const [form, setForm] = useState(formValues)
    const [show, setShow] = useState(false);
    const [itemEliminar, setItemEliminar] = useState()
    const refTitulo = useRef()
    const refDescripcion = useRef()

    useEffect(() => {
        getAllTodos()
    }, [])

    const getAllTodos = () => {
        axios.get(`${URL_BASE_API}/todos`)
            .then(response => {
                setTodoArray(response.data)
            })
            .catch(error => console.log('Hubo un error al cargar las tareas ', error.message))
    }

    const addTodo = (todo) => {
        axios.post(`${URL_BASE_API}/todo`, todo)
            .then(() => {
                console.log('Tarea agregada exitosamente.')
                setForm(formValues)
                refTitulo.current.focus()
                getAllTodos()
            })
            .catch(error => console.log('Hubo un error al agregar la tarea ', error.message))
    }

    const updateTodo = (todo, id) => {
        axios.put(`${URL_BASE_API}/update-todo/${id}`, todo)
            .then(() => {
                console.log('Tarea actualizada.')
                setForm(formValues)
                setIdEdit(null)
                refTitulo.current.focus()
                setTodoArray(todoArray.map(item => item.id == id ? { ...item, ...todo } : item))
            })
            .catch(error => console.log('Hubo un error al actualizar la tarea ', error.message))
    }

    const deleteTodo = (id) => {
        axios.delete(`${URL_BASE_API}/delete-todo/${id}`)
            .then(() => {
                console.log('Tarea eliminada.')
                setTodoArray(prevState => prevState.filter(item => item.id !== id))
                setShow(false)
            })
            .catch(error => console.log('Hubo un error al elimimnar la tarea ', error.message))
    }

    const deleteAllComplete = () => {
        axios.delete(`${URL_BASE_API}/delete-all/`)
            .then(() => {
                console.log('Tareas completas eliminadas.')
                setTodoArray(todoArray.filter(item => item.estado !== true))
            })
            .catch(error => console.log('No se encontraron tareas para eliminar ', error.message))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (idEdit) {
            // EDITAR TAREA
            if (!form.titulo.trim()) {
                refTitulo.current.focus()
            } else if (!form.descripcion.trim()) {
                refDescripcion.current.focus()
            } else {
                updateTodo(form, idEdit)
            }
        } else {
            // AGREGAR NUEVA TAREA
            if (!form.titulo.trim()) {
                refTitulo.current.focus()
            } else if (!form.descripcion.trim()) {
                refDescripcion.current.focus()
            } else {
                addTodo(form)
            }
        }
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const setFormDataWithTodoInfo = (id) => {
        setIdEdit(id)
        const encontrado = todoArray.find(item => item.id == id)
        setForm({ titulo: encontrado.titulo, descripcion: encontrado.descripcion })
        refTitulo.current.focus()
    }

    const toggleTodo = (id) => {
        const todoEdit = todoArray.find(item => item.id == id)
        todoEdit.estado = !todoEdit.estado
        updateTodo(todoEdit, id)
    }

    const handleModal = (item) => {
        setShow(true)
        setItemEliminar(item)
    }

    const handleCheck = (estadoComplete) => {
        return estadoComplete ? true : false
    }

    const handleClose = () => setShow(false);

    return (

        <div className='container'>
            <form className='d-flex rounded p-3 gap-3' onSubmit={handleSubmit}>
                <input autoFocus className='form-control' type="text" name='titulo' placeholder='Titulo' ref={refTitulo} onChange={handleChange} value={form.titulo} />
                <input className='form-control' type="text" name='descripcion' placeholder='Descripcion' ref={refDescripcion} onChange={handleChange} value={form.descripcion} />
                <input className='btn btn-primary' type="submit" value={`${idEdit ? 'Actualizar Tarea' : 'Agregar Tarea'}`} />
            </form>

            <div className="shadow rounded p-3 mt-3 list-group container-tareas">
                <div className='d-flex justify-content-between align-items-center list-group-item shadow'>
                    <h5 className=''>Todo List</h5>
                    <button className='btn btn-danger' onClick={deleteAllComplete}>Eliminar Tareas Completadas</button>
                </div>

                <ListTodos todoArray={todoArray}
                    handleCheck={handleCheck}
                    toggleTodo={toggleTodo}
                    setFormDataWithTodoInfo={setFormDataWithTodoInfo}
                    handleModal={handleModal} />

                <div className='list-group-item d-flex align-items-center'>
                    <span className='fw-400'>
                        Total de tareas: {todoArray.length},
                        Completadas: {todoArray.filter(item => item.estado).length} ,
                        Pendientes: {todoArray.filter(item => !item.estado).length}
                    </span>
                </div>

                <ModalDelete show={show} handleClose={handleClose} item={itemEliminar} deleteTodo={deleteTodo} />
            </div>
        </div>
    )
}

export default TodoApp
