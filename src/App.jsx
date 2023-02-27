import './App.css';
import './style/tileStyle.css';

import Tile from './components/Tile';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board/>
      </header>
    </div>
  );
}

export default App;
