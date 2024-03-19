import React, { useState } from "react";
import "./styles.css";
import { Todo } from "./model";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");

  const onComplete = () => {
    const filteredTodos = todos.filter((thisTodo) => thisTodo.id !== todo.id);
    setTodos(filteredTodos);
  };

  const onDelete = () => {
    const filteredTodos = todos.filter((thisTodo) => thisTodo.id !== todo.id);
    setTodos(filteredTodos);
  };

  return (
    <form
      className="todos__single"
      onSubmit={(e) => {
        // Find the index of the item in the array to change
        // Find todo
        const todoToFind = todos.filter(
          (thisTodo) => thisTodo.id === todo.id
        )[0];
        // Find Index
        const todoIndex = todos.indexOf(todoToFind);
        // Edit based on index
        todos[todoIndex] = {
          ...todo,
          todo: newTodoText,
        };
        setIsEditing(false);
        console.log(todos);
        setTodos(todos);

        e.preventDefault();
      }}
    >
      {isEditing ? (
        <input
          value={newTodoText}
          onChange={(e) => {
            setNewTodoText(e.target.value);
          }}
        />
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          edit
        </span>
        <span className="icon" onClick={onDelete}>
          delete
        </span>
        <span className="icon" onClick={onComplete}>
          done
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
