import { Button } from "../lib/ui/Button";
import { Input } from "../lib/ui/Input";
import "./App.css";

function Component({ name, children }) {
  return (
    <div className="element">
      <div className="name">
        <h2>{name}</h2>
      </div>
      <div className="view">{children}</div>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Component Showcase</h1>

      <Component name="Button">
        <Button> Click Me </Button>
      </Component>
      <Component name="Input">
        <Input />
      </Component>
    </>
  );
}

export default App;
