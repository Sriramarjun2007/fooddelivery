import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomPage from "./components/WelcomPage";
import Page2 from "./components/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomPage />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;