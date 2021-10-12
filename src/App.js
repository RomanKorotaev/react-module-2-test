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

import initialTodos2 from './todos2.json'
import TodoList2 from './components/TodoList2'

import MyForm from './components/MyForm'
import shortid from 'shortid'

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
        todos2: initialTodos2
    }

    deleteTodo = todoId => {
        this.setState(prevState => ({
            todos: prevState.todos.filter (todo => todo.id !== todoId), 
         }))
    }
 
    deleteTodo2 = todoId2 => {
        this.setState(prevState => ({
             todos2: prevState.todos2.filter (todo2 => todo2.id !== todoId2), 
         })) 
    }

    // addTodo = text => {
    //     console.log(text);

    //     const todo = {
    //         id: shortid.generate(),
    //         text: text,
    //         completed: false,
    //     }
    //     this.setState(prevState => ({
    //         todos: [todo, ...prevState.todos]
    //     }))
    //  }

      addTodo2 = (message, tag, text) => {
        console.log(message, tag, text);

        const todo = {
            id: shortid.generate(),
            text: text,
            completed: false,
            tag: tag,
        }
        this.setState(prevState => ({
            todos2: [todo, ...prevState.todos2]
        }))
     }

    render() {
        const { todos } = this.state;
        const { todos2 } = this.state;

        const completedTotos = todos.reduce(
    (acc, todo) => (todo.completed ? acc+1 : acc), 0
        )

        const completedTotos2 = todos2.reduce(
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
                <br></br>
                <br></br>
                  <p>Компонент MyForm:  </p>
                {/* <MyForm onSubmit={ this.addTodo} /> */}
                 <MyForm onSubmit={ this.addTodo2} />
                <br></br>
                 <br></br>
                <div>
                    <p>Общее кол-вло туду: { todos.length}</p>
                    <p>Кол-во выполненных туду: {completedTotos} </p>
                </div>
                <TodoList todos={todos} onDeleteTodo={ this.deleteTodo}/>

                <br></br>
                <TodoList2 todos2={todos2} onDeleteTodo2={this.deleteTodo2} />
                 <div>
                    <p>Общее кол-вло TodoList2: <b> { todos2.length} </b></p>
                    <p>Кол-во выполненных TodoList2:<b> { completedTotos2} </b></p>
                </div>

        </div>)}
}

 

export default App;