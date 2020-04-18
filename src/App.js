import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './actions';
import Hook from './hooks/Hook';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Counter: {counter}</h1>

      <button onClick={() => { dispatch(increment(5)) }}>+</button>
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}

      <h1>React Hooks Sample</h1>
      <Hook></Hook>
    </div>
  );
}

export default App;
