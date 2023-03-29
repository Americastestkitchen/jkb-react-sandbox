// src/components/TodoForm.js

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      addTodo({
        id: uuidv4(),
        text: input,
        completed: false,
      })
      setInput('')
    }
  }

  return (
    <form className="flex items-center gap-2 bg-gray-100 p-4" onSubmit={handleSubmit}>
      <input
        className="flex-grow"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TodoForm
