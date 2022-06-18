import './App.css';
import Memes from '../FetchApi/index';
import Button from '../Button';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Memes />
    </div>
  );
}

export default App;
