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

import EventsAndStates from './components/EventsAndStates/EventsAndStates'

 function App() {
    return (
        <dev>
            <PaintingList items={paintings} />
            <EventsAndStates/>
        </dev>
    );
}

export default App;