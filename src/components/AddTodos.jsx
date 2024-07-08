import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodos = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addToDoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))           // automatically asign to action.payload in reducer
        setInput("")
    }

  return (
    <>
      <form action="" onSubmit={addToDoHandler}>
        <input type="text" placeholder='Enter todo' value={input}
        onChange={(e) => setInput(e.target.value)}/> <br /><br />
      <button type='submit' >Add ToDo</button>
      </form>
      
    </>
  )
}

export default AddTodos
