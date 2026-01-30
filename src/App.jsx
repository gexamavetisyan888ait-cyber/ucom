import "./App.css";
import Home from "./pages/Home";
import ForHome from "./pages/ForHome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Rouming from "./pages/Rouming";
import Help from "./pages/Help";
import MobileConectionn from './pages/MobileConectionn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rouming" element={<Rouming />} />
        <Route path="/forHome" element={<ForHome />} />
        <Route path="/help" element={<Help />} />
        <Route path="/mobileconection" element={<MobileConectionn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
