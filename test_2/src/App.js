import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Pricing />
    </div>
  );
}

export default App;
