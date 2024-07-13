import './App.css'
import Footer from './components/Footer'
import TodoApp from './components/TodoApp'

function App() {

  return (
    <main className='d-flex align-items-center flex-column justify-content-center vh-100'>
      <h1 className='text-center text-decoration-underline fst-italic text-white pt-3'>To-Do List</h1>
      <TodoApp />
      <Footer />
    </main>
  )
}

export default App
