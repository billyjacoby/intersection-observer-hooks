import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "intersection-observer";

import { useIntersectionObserver } from "./useIntersectionObserver";

function App() {
  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, { threshold: 1 });

  useEffect(() => {
    console.log(inView, entry);
  }, [entry, inView]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="full-height one">
        <div className="item-one" />
      </div>
      <div className="full-height two">
        <div className="item-two" ref={elementRef}>
          {inView && <p style={{ color: "white" }}>I'm in view!</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
