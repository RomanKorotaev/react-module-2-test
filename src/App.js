// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

////////////////// ===================== React . Занятие 2  =========================


import React, { Component } from 'react';
import './App.css';

import paintings from './paintings.json'; // импортируем json-файл с данными (для примера динаммического изменения данных)
import PaintingList from './components/PaintingList/PaintingList'

import Dropdown from './components/Dropdown/Dropdown'
import ColorPicker from './components/ColorPicker/ColorPicker'
import EventsAndStates from './components/EventsAndStates/EventsAndStates'
import Counter from './components/Counter/Counter'
import TodoList from './components/TodoList'
// import initialTodos from './todos.json'
import initialTodos from './todos.json'


const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


class App extends Component {
    state = {
        todos: initialTodos,
    }

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter (todo => todo.id !== todoId), 
         }))
    }

    render() {
        const { todos } = this.state;

        const completedTotos = todos.reduce(
    (acc, todo) => (todo.completed ? acc+1 : acc), 0
        )
        
        console.log  ('completedTotos =', completedTotos )

        return (
            <div>
            <h1> Состояние компонента</h1>
            {/* <PaintingList items={paintings} /> */}
            {/* <EventsAndStates /> */}
            {/* <ColorPicker options={colorPickerOptions}/> */}
            <Counter initialValue={ 10}/>
                {/* <Dropdown /> */}

                <div>
                    <p>Общее кол-вло туду: { todos.length}</p>
                    <p>Кол-во выполненных туду: </p>
                </div>
                <TodoList todos={todos} onDeleteTodo={ this.deleteTodo}/>
        </div>)}
}

 

export default App;