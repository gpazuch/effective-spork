import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/tailwindcss.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="aspect-video lg:border xl:border-x rounded-xl p-6 space-y-4">
      <div className="lg:flex flex-1 place-content-between">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            className="logo hover:animate-bounce"
            alt="Vite logo"
          />
        </a>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="logo hover:animate-spin"
            alt="React logo"
          />
        </a>

        <a href="https://tailwindcss.com" target="_blank" rel="noreferrer">
          <img
            src={tailwindLogo}
            className="logo hover:animate-pulse"
            alt="Tailwind logo"
          />
        </a>
      </div>
      <h1 className="text-slate-100 space-x-8 hover:scale-105 transition-all duration-1000 text-slate-600">
        <span className="font-sans text-purple-500">Vite</span>
        <span>+</span>
        <span className="font-serif text-cyan-300">React</span>
        <span>+</span>
        <span className="font-mono text-blue-300">Tailwind</span>
      </h1>
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-slate-800 rounded-lg px-2 py-4 border-solid border border-slate-300 hover:border-green-500 transition-all duration-300 focus-visible:outline-4px cursor-pointer"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the logos to learn more</p>
    </div>
  );
}

export default App;
