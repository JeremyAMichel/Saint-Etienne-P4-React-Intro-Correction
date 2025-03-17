import "./App.css";
import Time from "./components/Time";
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
    <main>
      <Welcome firstName="Jérémy" lastName="Michel" />
      <Time />
    </main>
  );
}

export default App;
