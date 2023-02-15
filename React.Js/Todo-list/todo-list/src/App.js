import TodoHome from "./Components/TodoHome";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoContex = createContext();

const initialstate = {
  editOpen: false,
  taskMenu: false,
  id: "",
  allTodos: [],
  title: "",
  description: "",
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

    case "Title":
      return {
        ...state,
        title: action.data,        
      }

    case "Description":
      return {
        ...state,
        description: action.data,
      }

    case "TaskMenu":
      return {
        ...state,
        taskMenu: true,
      };

    case "addTodo":
      return {
        ...state,
        taskMenu:false,
        editOpen:false,
        allTodos: [...state.allTodos, {
          title: state.title, 
          description:state.description,
        }],
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
