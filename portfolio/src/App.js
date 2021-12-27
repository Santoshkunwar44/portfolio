import { useContext } from "react";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import { ThemeContext } from "./component/Context/Context";
import Intro from "./component/Intro/Intro";
import Productlist from "./component/Productllist/Productlist";
import Toggle from "./component/Toggle/Toggle";

function App() {
  const {state} = useContext(ThemeContext);
  const darkMode = state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      className="App"
    >
      <Toggle />
      <Intro />
      <About />
      <Productlist />
      <Contact />
    </div>
  );
}

export default App;
