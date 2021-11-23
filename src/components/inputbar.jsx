import React, { memo } from 'react';

const Inputbar = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = ''; input을 초기화 할때
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        placeholder="Habit"
        type="text"
        className="add-input"
      />
      <button className="add-button">Add</button>
    </form>
  );
});
export default Inputbar;
