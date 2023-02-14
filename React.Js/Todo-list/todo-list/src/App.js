import TodoHome from "./Components/TodoHome";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoContex = createContext();

const initialstate = {
  editOpen: false,
  taskMenu: false,
  allTodos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EditOpen":
      return {
        ...state,
        editOpen: true,
      };
      break;

    case "EditClose":
      return {
        ...state,
        editOpen: false,
        setEdit: false,
        taskMenu: false,
      };

    case "TaskMenu":
      return {
        ...state,
        taskMenu: true,
      };

    case "addTodo":
      return {
        ...state,
        allTodos: [...state.allTodos, action.data],
      };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div className="App">
      <TodoContex.Provider value={{ ...state, dispatch: dispatch }}>
        <TodoHome />
      </TodoContex.Provider>
    </div>
  );
}

export default App;
