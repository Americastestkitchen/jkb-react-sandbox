import React, { useState, useEffect } from 'react'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import MyButton from './components/MyButton'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTodos || [];
  })

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id, nexText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, text: nexText}
        }
        return todo
      })
    )
  }

  const app = {
    name: 'Todo List',
  }

  const products = [
    {title: 'React', price: 100},
    {title: 'Angular', price: 200},
    {title: 'Vue', price: 300},
  ]

  const productItems = products.map(product => (
    <div className="bg-gray-100 p-4 flex items-center justify-between gap-2" key={product.title}>
      <h3 className="font-semibold">{product.title}</h3>
      <p className={ product.price >= 300 ? 'text-red-700' : 'text-green-500'}>${product.price.toFixed(2)}</p>
    </div>
  ));


  return (
    <div className="w-full max-w-5xl mx-auto space-y-12 py-12">
      <div className="space-y-1">
        <h1 className="font-semibold text-center bg-gray-800 text-white p-1">{app.name}</h1>
        <div className="space-x-2">
          <MyButton />
          <MyButton />
        </div>
        <TodoForm addTodo={ addTodo } />

        <div className="space-y-1">
          {todos.map((todo) =>(
            <Todo
              key={todo.id}
              todo={todo}
              toggleComplete={ toggleComplete }
              deleteTodo={ deleteTodo }
              updateTodo={ updateTodo }
            />
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <h2 className="font-semibold text-center bg-gray-800 text-white p-1">Products</h2>
        {productItems}
      </div>
    </div>
  )
}

export default App;
