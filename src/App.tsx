import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { Button } from "./components/button";

const App: React.FC = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (todo) {
  //     setTodos([
  //       ...todos,
  //       {
  //         id: Date.now(),
  //         todo,
  //         isDone: false,
  //       },
  //     ]);
  //     setTodo("");
  //   }
  // };

  return (
    <div className="App">
      {/* <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} /> */}
      <Button backgroundColor="red" fontSize={30} />
    </div>
  );
};

export default App;
