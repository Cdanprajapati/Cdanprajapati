import TodoHome from "./Components/TodoHome";
import { useReducer } from "react";
import { createContext } from "react";

export const TodoContex = createContext();

const initialstate = {
  inputOpen: false,
  taskMenu: false,
  taskDone: false,
  isDeleted: false,
  border: "",
  Tags: "",
  id: 0,
  allTodos: [],
  title: "",
  description: "",
  taskDoneOpen: true,
  taskMenuOpen: true,

  tags : [
    { title: "work", id: 1 },
    { title: "study", id: 2 },
    { title: "Enjoyment", id: 3 },
    { title: "family", id: 4 },
  ] 

};


const reducer = (state, action) => {
  switch (action.type) {
    case "InputOpen":
      return {
        ...state,
        inputOpen: true,
        title: "",  
        description: "",
      };
      break;

    case "SelectedTags" :
       Tags = border((p) =>
        p.includes(item.id)
          ? p.filter((p) => p !== item.id)
          : [...p, item.id]
        )
      return {
       allTodos: Tags
      }

    case "UpdatedTask":
      let obj = {
        title: state.title,
        description: state.description
      }
      console.log('action.id',state.id)
      let updateTodo = state.allTodos.map((item, index) => {
        if(index === state.id)
            item = obj;
        return item
      })
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
        allTodos: updateTodo   
      }

    case "updateOpen":
      let edit = state.allTodos;
      let Update = edit.filter((item, index) => index === action.id);
      console.log(Update,"===>")
      return {
        ...state,
        id: action.id,
        inputOpen:true, 
        title: Update[0].title, 
        description: Update[0].description, 
        taskMenu: true,   
      };
      break;
  
    case "InputClose":
      return {
        ...state,
        inputOpen: false,
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

    case "Deleted":
      let donetask = state.allTodos;
      let check = donetask.filter((item, index) => index !== action.id);
      console.log(check, "[====>]", action.id);
      return {
        ...state,
        allTodos: check,
        taskMenu: false,
      };

    case "TaskDone":
      let todos = state.allTodos;
      todos[action.id] = {
        ...todos[action.id],
        isDone: true,
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
      };
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
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
