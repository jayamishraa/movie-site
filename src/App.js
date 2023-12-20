import Home from "./pages/Home";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./pages/Description";
import Discover from "./pages/Discover";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/detail" element={<Description />} />
          <Route path="/discover" element={<Discover />} />
          
        </Route>
        </Routes>
      </BrowserRouter>
        
      </div>
  );
}

export default App;
