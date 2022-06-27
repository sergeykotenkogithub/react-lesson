import {useDispatch, useSelector} from 'react-redux';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({type: 'plus'})
  }
  const decrease = () => {
    dispatch({type: 'minus'})
  }
  const reset = () => {
    dispatch({type: 'reset'})
  }

  return (
    <div>
      <button onClick={increase}>+</button>
      <div>{count}</div>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
