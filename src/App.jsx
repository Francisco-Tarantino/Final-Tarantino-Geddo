import { Outlet} from "react-router-dom"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./index.css";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

function App() {

  const {state} = useContext(ContextGlobal)

  return (
      <div className={state.theme ? "dark" : null}>
          <Navbar/>
          <Outlet height="200px" />
          <Footer/>
      </div>
  );
}

export default App;

