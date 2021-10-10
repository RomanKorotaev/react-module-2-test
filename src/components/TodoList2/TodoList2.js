import s from './TodoList2.module.css'
import React from 'react'

const TodoList2 = ({ todos2, onDeleteTodo2 }) =><ul>TodoList_2
    {todos2.map( ({ id, text, completed } )=> (
        <li className={ s.TodoList2__item} key = {id} >
            <p> <b> {text} . </b><span> Completed: { completed ? "true." : "false!"} </span> </p>
            <button onClick={() => onDeleteTodo2(id)}  className={s.buttonDelete }>Удалить</button>
    </li>
    ) ) }
</ul>;

export default TodoList2;  