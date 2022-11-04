import { ThemeProvider } from "@mui/material/styles";
import { HelmetProvider, Helmet } from "react-helmet-async";

import TodoList from "./Components/TodoList";
import { theme } from "./Components/UI/Theme";
import TitleTodo from "./Components/TitleTodo";
import AddTodo from "./Components/AddTodo";
import { useState } from "react";
import EditTodo from "./Components/EditTodo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [query, setQuery] = useState({ text: "" });

  const handleOpenDialog = (type) => {
    setOpenDialog(true);
    setDialogType(type);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDialogType("");
  };

  const getTodo = (item) => {
    const getItem = item;
    setTodo(getItem);
  };

  const addTodo = (value) => {
    setTodos([...todos, value]);
    setFilteredTodos([...filteredTodos, value]);
  };

  const deleteTodo = (todoId) => {
    const allTodos = [...todos].filter((t) => t.id !== todoId);
    setTodos(allTodos);
    setFilteredTodos(allTodos);
  };

  const editTodo = (value) => {
    const updateTodo = [...todos].filter((t) => {
      if (t.id === todo.id) t.todo = value;
      return todos;
    });
    setTodos(updateTodo);
  };

  const editStatus = (id) => {
    const updateStatus = [...todos].filter((t) => {
      if (t.id === id) t.completed = !t.completed;
      return todos;
    });
    setTodos(updateStatus);
  };
  const filter = (query) => {
    setQuery({ text: query });
    const allTodos = todos.filter((t) => {
      return t.completed.toString().includes(query.toString());
    });
    setFilteredTodos(allTodos);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>Todo App</title>
          </Helmet>
        </HelmetProvider>

        <TitleTodo />
        <TodoList
          handleOpenDialog={handleOpenDialog}
          todos={todos}
          deleteTodo={deleteTodo}
          getTodo={getTodo}
          editStatus={editStatus}
          filter={filter}
          filteredTodos={filteredTodos}
          query={query}
        />

        <AddTodo
          handleCloseDialog={handleCloseDialog}
          openDialog={openDialog}
          addTodoProps={addTodo}
          dialogType={dialogType}
        />

        <EditTodo
          handleCloseDialog={handleCloseDialog}
          openDialog={openDialog}
          dialogType={dialogType}
          editTodo={editTodo}
        />
      </ThemeProvider>
    </>
  );
};

export default App;
