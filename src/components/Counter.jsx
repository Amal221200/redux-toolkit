import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement, incrementByAmount } from "../redux/counter";

const Counter = () => {
  // const [count, setCount] = useState(0);
  // const count = useSelector((state) => state.counter.count)
  // OR
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "grey",
        height: "125px",
        padding: "10px",
        minWidth: "250px"
      }}
    >
      <h3>Count : {count}</h3>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(30));
          }}
        >
          Increment by 30
        </button>
      </div>
    </div>
  );
};

export default Counter;
