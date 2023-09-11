import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/app/Store";
import { decrement, increment } from "./redux/features/counter/CounterSlice";

function App() {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{counter.value}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default App;
