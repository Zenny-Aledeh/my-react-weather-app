import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project is coded by Zeinab Abu and is{" "}
          <a
            href="https://github.com/Zenny-Aledeh/my-react-weather-app"
            target="blank"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
