import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }

    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }
    default:
      return state;
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
  return (
    <div className="tutorial">
      <div>Count: {state.count}</div>
      {state.error && <div className="mb-2 text-red-500">{state.error}</div>}
      <button className="mb-2" onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducerComponent;
