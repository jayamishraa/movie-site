import { useSelector } from "react-redux";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./pages/Description";


function App() {
  // const initialReducer = useSelector(state => state.initialReducer)
  // const { isDropdown, isSidebar } = initialReducer
  return (
    <div className="App">
      {/* <Header />
      { isDropdown && <Dropdown />}
      { isSidebar && <Sidebar />}
      <div className={isSidebar?"dynamic-container":"dynamic-container-expanded"}> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<Description />} />
          
        </Route>
        </Routes>
      </BrowserRouter>
        
      </div>
    // </div>
  );
}

export default App;
