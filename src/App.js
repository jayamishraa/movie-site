import { useSelector } from "react-redux";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  const initialReducer = useSelector(state => state.initialReducer)
  const { isDropdown, isSidebar } = initialReducer
  return (
    <div className="App">
      <Header />
      { isDropdown && <Dropdown />}
      { isSidebar && <Sidebar />}
      <div className={isSidebar?"dynamic-container":"dynamic-container-expanded"}>
        <Home />
      </div>
    </div>
  );
}

export default App;
