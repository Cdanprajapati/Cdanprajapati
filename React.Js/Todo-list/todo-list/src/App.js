import TodoHome from "./Components/TodoHome";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoContex = createContext();

const initialstate = {
  editOpen: false,
  taskMenu: false,
  taskDone: false,
  isCompleted: false,
  id: 0,
  allTodos: [],
  title: "",
  description: "",
  taskDoneOpen: true,
  taskMenuOpen: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "EditOpen":
      let edit = state.allTodos;
      edit[action.id] = {
        ...edit
      }

      return {
        ...state,
        editOpen: true,
        allTodos: edit,
      };
      break;

    case "EditClose":
      return {
        ...state,
        editOpen: false,
        setEdit: false,
        taskMenu: false,
      };

    case "Title":
      return {
        ...state,
        title: action.data,
      };

    case "Description":
      return {
        ...state,
        description: action.data,
      };

    case "Completed":
      let donetask = state.allTodos;
      let check = donetask.filter((item, index)=> index !== action.id)  
      console.log(check, "[====>]", action.id)
      return {
        ...state,
        allTodos: check,
        taskMenu:false
      };

    case "TaskDone":
      let todos = state.allTodos;
        todos[action.id] = {
          ...todos[action.id],
          isDone:true,
        };
      return {
        ...state,
        allTodos: todos,
      };

    case "TaskMenu":
      return {
        ...state,
        taskMenu: !state.taskMenu,
        taskMenuOpen: action.id,
      };

    case "addTodo":
      let update = state.allTodos;
      update[action.id] = {
        ...update[action.id],
      }
      return {
        ...state,
        editOpen: false,
        taskMenu:false,
        allTodos: [
          ...state.allTodos,
          {
            title: state.title,
            description: state.description,
            isDone: false,
          },
        ],
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
