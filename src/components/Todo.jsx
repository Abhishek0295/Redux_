import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);       // we receive value in callback.
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>ToDo's</h1>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(() => removeTodo(todo.id))}>X</button>
          </li>
        ))}
      </div>
    </>
  );
};

export default Todo;
