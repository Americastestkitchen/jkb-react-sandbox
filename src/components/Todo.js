// src/components/Todo.js

import React, { useState } from 'react'

const Todo = ({ todo, toggleComplete, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedText, setEditedText] = useState(todo.text)

  const handleCheckboxClick = () => {
    toggleComplete(todo.id)
  }

  const handleDeleteClick = () => {
    deleteTodo(todo.id)
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    if(editedText.trim()) {
      updateTodo(todo.id, editedText)
      setIsEditing(false)
    }
  }

  const handleInputChange = (e) => {
    setEditedText(e.target.value)
  }

  return (
    <div className="bg-gray-100 p-4 flex items-center space-x-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckboxClick}
      />

      {isEditing ? (
        <>
          <input
            className="flex-grow"
            type="text"
            value={editedText}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <span className="flex-grow" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      {isEditing ? null : <button onClick={handleEditClick}>Edit</button>}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default Todo
