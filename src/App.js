import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Eldoret" />
        <footer>
          <a href="https://github.com/Mercy-Kanyi/react-weather-project" rel='no-referrer'>
            Open-source code
          </a>{" "}
          by Mercy Kanyi
        </footer>
      </div>
    </div>
  );
}

export default App;
