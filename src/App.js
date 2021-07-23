import "./App.css";
import Header from "./components/Header";
import Switch from "./components/Switch";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
library.add(faUserAstronaut);

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
