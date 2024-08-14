import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <h1>React Custom Tooltip</h1>
      <div className="Box">
        {/* Top tooltip */}
        <Tooltip
          position="top"
          tooltipText="Thanks for hovering! I'm a tooltip"
        >
          <button>Hover over me for Top</button>
        </Tooltip>

        {/* Bottom tooltip */}
        <Tooltip
          position="bottom"
          tooltipText="Thanks for hovering! I'm a tooltip"
        >
          <button>Hover over me for Bottom</button>
        </Tooltip>

        {/* Left tooltip */}
        <Tooltip
          position="left"
          tooltipText="Thanks for hovering! I'm a tooltip"
        >
          <button>Hover over me for Left</button>
        </Tooltip>

        {/* Right tooltip */}
        <Tooltip
          position="right"
          tooltipText="Thanks for hovering! I'm a tooltip"
        >
          <button>Hover over me for Right</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
