import './App.css'
import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const disPatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => disPatch(increment(2))}>+</button>
      <button onClick={() => disPatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
