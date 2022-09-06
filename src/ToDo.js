import React from "react";

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} name="todo" value={todo.id} c lassName={todo.complete ? "strike" : ""} onClick={handleClick}>
        <input type="checkbox" checked={todo.complete} />{todo.task}
        </div>
    );
};

export default ToDo;
