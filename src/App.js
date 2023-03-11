import TodoHome from "./Components/TodoHome";
import { useEffect, useReducer} from "react";
import { createContext } from "react";

export const TodoContex = createContext();

const initialstate = {
  inputOpen: false,
  taskMenu: false,
  taskDone: false,
  isDeleted: false,
  loginOpen: false,
  visiblecnfpassword: false,
  id: 0,
  forgetpasswordOpen: false,
  poolOpen: false,
  visible: false,
  hideDoneTask: false,
  filterTask: false,
  loaderOpen: false,
  signUpOpen: false,
  selectedHomeTags: false,
  toastOpen: false,
  loginSuccess: false,
  better: [],
  border: [],
  allTodos: [],
  filterTodos: [],
  selected: "",
  title: "",
  errorMsg:"",
  description: "",
  taskDoneOpen: true,
  taskMenuOpen: true,
  tags: [
    { title: "work", id: 1 },
    { title: "study", id: 2 },
    { title: "Enjoyment", id: 3 },
    { title: "family", id: 4 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "InputOpen":
      return {
        ...state,
        inputOpen: true,
        title: "",
        description: "",
        border: [],
        better: [],
      };
      break;

    case "YouCanLogin" :
      return {
        ...state,
        loginOpen: false,
        loginSuccess: true,
      }

    case "VisibleConfirmPassword":
      return {
        ...state,
        visible: false,
        visiblecnfpassword: !state.visiblecnfpassword,
      };
    case "ToastOpen":
      return {
        ...state,
        toastOpen: true,
      };

    case "ToastClose":
      return {
        ...state,
        toastOpen: !state.toastOpen,
      };

    case "LoaderOpen":
      return {
        ...state,
        loaderOpen: true,
      };

    case "loaderClose":
      return {
        ...state,
        loaderOpen: !state.loaderOpen,
      };

    case "ForgetPasswordOpen":
      return {
        ...state,
        forgetpasswordOpen: true,
      };

    case "ForgetPassClose":
      return {
        ...state,
        signUpOpen: false,
        forgetpasswordOpen: false,
        loginOpen: true,
      };

    case "Loginclose":
      return {
        ...state,
        loginOpen: false,
        signUpOpen: false,
        // loginSuccess: true,
        forgetpasswordOpen: false,
      };

    case "SignUpClose":
      return {
        ...state,
        signUpOpen: false,
        toastOpen: false,
        loginSuccess: false,
      };

    case "SignUpOpen":
      return {
        ...state,
        signUpOpen: true,
        toastOpen: false,
        forgetpasswordOpen: false,
        loginSuccess: false,
      };

    case "LoginOpen":
      return {
        ...state,
        loginOpen: true,
        poolOpen: true,
      };

    case "SelectedTags":
      let selected = state.tags.filter((item, id) => item.id === action.id);
      let prev = state.border.filter((item, id) => item.id === action.id);
      let border = [...state.border, ...selected];
      if (prev.length > 0) {
        border = border.filter((item, id) => item.id !== action.id);
      }
      return {
        ...state,
        selected,
        border,
      };

    case "VisiblePassword":
      return {
        ...state,
        visible: !state.visible,
      };

    case "HomeTags":
      let homeTags = state.tags.filter((item, id) => item.id === action.id);
      let tap = state.better.filter((item, id) => item.id === action.id);
      let better = [...state.better, ...homeTags];

      if (tap.length > 0) {
        better = better.filter((item, id) => item.id !== action.id);
      }
      //   let filterTodos = state.allTodos.filter(todo => {
      //   let filterTags = todo.tags.filter(todoTag => {
      //       let findTag = better.find(tag => {
      //           if(todoTag.title === tag.title && todoTag.id === tag.id)
      //               return tag
      //       })
      //       return findTag
      //   })
      //   if(filterTags.length > 0){
      //    return todo
      //   }
      //  }
      // )

      return {
        ...state,
        // allTodos: filterTodos,
        selectedHomeTags: true,
        isDone: true,
        homeTags,
        better,
        filterTask: better.length > 0,
      };

    case "updateOpen":
      let edit = state.allTodos;
      let Update = edit.filter((item, index) => index === action.id);
      return {
        ...state,
        id: action.id,
        inputOpen: true,
        title: Update[0].title,
        description: Update[0].description,
        border: Update[0].tags,
        taskMenu: true,
      };
      break;

    case "UpdatedTask":
      let obj = {
        title: state.title,
        description: state.description,
        tags: state.border,
      };
      let updateTodo = state.allTodos.map((item, index) => {
        if (index === state.id) item = obj;
        return item;
      });
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
        allTodos: updateTodo,
      };

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
      return {
        ...state,
        allTodos: check,
        taskMenu: false,
      };

    case "Donetask":
      let todos = state.allTodos;
      todos[action.id] = {
        ...todos[action.id],
        isDone: true,
      };
      return {
        ...state,
        allTodos: todos,
      };

    case "Non-Done":
      return {
        ...state,
        isDone: false,
      };

    case "HideDonetask":
      return {
        ...state,
        hideDoneTask: action.checked,
      };

    case "TaskMenu":
      return {
        ...state,
        taskMenu: !state.taskMenu,
        taskMenuOpen: action.id,
      };

    case "ErMsgSingUp" :
      return {
       ...state,
       errorMsg: action.errorMsg,
      };

    case "addTodo":     
      let update = state.allTodos;
      if (action.id)
        update[action.id] = {
          ...update[action.id],
        };
   
      return {
        ...state,
        inputOpen: false,
        taskMenu: false,
        filterTask: false,
        allTodos: [
          ...state.allTodos,
          {
            title: state.title,
            description: state.description,
            isDone: false,
            tags: state.border,
          },
        ],
      };
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  // add data inlocalstorage 
  useEffect(()=> {
    localStorage.setItem("allData", JSON.stringify(state.allTodos))
  }, [state.allTodos]);
    
  return (
    <div className="App">
      <TodoContex.Provider value={{ ...state, dispatch: dispatch }}>
        <TodoHome />
      </TodoContex.Provider>
    </div>
  );
}
export default App;
    