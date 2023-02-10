import { Button } from "../components/Button";
import { useCounter } from "../hooks/use-counter";

export const CounterPages = ({ initialValue }) => {
  const { count, increment } = useCounter(initialValue);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};
