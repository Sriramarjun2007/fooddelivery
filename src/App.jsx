import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcompage from "./components/Welcompage";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Loginpage from "./pages/Loginpage"
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcompage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3/>}/>
        <Route path="/page4" element={<Page4/>}/>
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;