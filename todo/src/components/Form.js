// import React from "react";

import React, {useReducer, useState} from "react";

// const initialState =

function reducer (state, action) {
  console.log("State, action from reducer:", state, action)
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        item: action.payload,
        completed: false,
        id: new Date()
      });
    // case "TOGGLE_TODO":
    //   return state.concat({
    //     item: action.payload,
    //     completed: false,
    //     id: new Date()
    //   });

    // case "REMOVE_TODO":
    //   return state.filter(action.payload);
    default:
      return state;
  }
}


const Form = () => {
  const [inputState, setInputState] = useState("");
  const [ state, dispatch] = useReducer(reducer, [{
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }])

  const handleChange = (e) => {
    setInputState(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: inputState})
  }

  return (
    <div>
      <h1>Bestest Form Ever.</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="input" onChange={handleChange}/>
        <button
          type="submit"
        > Add Todo</button>
      </form>
      {state.map((todo) => {
        console.log(todo)
        return (
          <>
            <h2>{todo.item}</h2>
          </>
        )
      })}
    </div>
  )
}

export default Form;