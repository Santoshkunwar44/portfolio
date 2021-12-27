import About from "./component/About/About";
import Intro from "./component/Intro/Intro";
import Productlist from "./component/Productllist/Productlist";


function App() {
  return (
    <div className="App">
      <Intro/>  
      <About/>
      <Productlist/>
    </div>
  );
}

export default App;
