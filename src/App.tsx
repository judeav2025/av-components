import { useState } from "react";
import { Button } from "../lib/components/Button";
import { Input } from "../lib/components/Input";
import "./App.css";

function App() {
  return (
    <>
      <h1>Component Showcase</h1>
      <div className="element">
        <Button> Click Me </Button>
      </div>
      <div className="element">
        <Input />
      </div>
    </>
  );
}

export default App;
