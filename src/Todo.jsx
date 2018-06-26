import React from 'react';

const Todo = props => (
    <div>
        <li>{props.todo.task}<span
        onClick={() => props.handleRemoveTodo(props.todo.id)} 
        style={{cursor: 'pointer', paddingLeft: '10px'}}>
        X
        </span>
        </li>
    </div>
)
export default Todo;