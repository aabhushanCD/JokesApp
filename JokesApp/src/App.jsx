import "./App.css";
import Box from "./components/box";
import "@fontsource/island-moments";
function App() {
  return (
    <>
      <div className="jokelogo">
        <span className="logo">
          <a href="#" style={{ textDecoration: "none" }}>
            <span> JokesCenter</span>
          </a>
        </span>
      </div>

      <container>
        <div className="child1"></div>
        <div className="child2">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
        <div className="child3"></div>
      </container>
    </>
  );
}

export default App;
