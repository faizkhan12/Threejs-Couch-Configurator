import Canvas from "./canvas";
import Configurator from "./pages/Configurator";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Configurator />
      <Canvas />
    </main>
  );
}

export default App;
