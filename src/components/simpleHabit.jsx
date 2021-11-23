import React, { useCallback, useRef, useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
    console.log(spanRef.current);
  });

  return (
    <li className="habit">
      <span className="habit-name">Reading</span>
      <span ref={spanRef} className="habit-count">
        {count}
      </span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
