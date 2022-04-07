import { useReducer } from "react"

type Count = {
  count: number;
}
type Action = {
  type: string;
}

const initialState: Count = {count: 0}

const reducer = (state: Count, action: Action) => {
  switch(action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return initialState
    default:
      return state
  }
}

export default function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h3>useReducer : {count.count}</h3>
      <button onClick={() => dispatch({type: 'increment'})}>increment</button><br/>
      <button onClick={() => dispatch({type: 'decrement'})}>decrement</button><br/>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button><br/>
    </div>
  )
}
