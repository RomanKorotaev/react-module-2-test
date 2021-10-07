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

import paintings from './paintings.json'; // импортируем json-файл с данными (для примера динаммического изменения данных)
import PaintingList from './components/PaintingList/PaintingList'
import './App.css';
import Dropdown from './components/Dropdown/Dropdown'
import ColorPicker from './components/ColorPicker/ColorPicker'


import EventsAndStates from './components/EventsAndStates/EventsAndStates'


import Counter from './components/Counter/Counter'

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

 function App() {
    return (
        <dev>
            <PaintingList items={paintings} />
            <EventsAndStates />
            <ColorPicker options={colorPickerOptions}/>
            {/* <Counter initialValue={ 10}/> */}
            <Dropdown />
        </dev>
    );
}

export default App;