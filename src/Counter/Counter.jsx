import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const plusButton = () => {
    setCount((prev) => {
      setColor("black");
      return prev + 1;
    });
  };

  const minusButton = () => {
    if (count > 0) {
      setCount((prev) => {
        setColor("red");
        return prev - 1;
      })
      if(count === 0){
        setColor("black")
      }
    }
  };

  const resetButton = () => {
    setCount(0);
    setColor("black")
  };

  // setColor("")

  return (
    <div className="counterDiv">
      <div className="counterBox">
        <button onClick={plusButton} className="counterButtonPlus">
          <i class="fa-solid fa-user-plus"></i>
        </button>
        <span style={{ color: color }} className="counterSpan">
          {count}
        </span>
        <button onClick={minusButton} className="counterButtonMinus">
          <i class="fa-solid fa-user-minus"></i>
        </button>
      </div>
      <button onClick={resetButton} className="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;