import React from 'react'
import './TodoList.css';

const TodoList = ({ todos, onDeleteTodo }) => <ul>TodoList
    {todos.map( ({ id, text } )=> (
    <li key = {id} >
            <p>{text}</p>
            <button onClick={ ()=> onDeleteTodo (id)}  >Удалить</button>
    </li>
    ) ) }
</ul>;

export default TodoList;