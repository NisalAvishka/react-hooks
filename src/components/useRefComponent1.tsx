import { useRef, useState } from "react";

const useRefComponent1 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleSubmit = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State Count:", count);
    console.log("Ref Count:", countRef.current);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Ref Count: {countRef.current}</h1>
      <button onClick={handleSubmit}>Increment</button>
    </div>
  );
};

export default useRefComponent1;
