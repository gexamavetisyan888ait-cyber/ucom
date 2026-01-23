import "./App.css";
import Home from "./pages/Home";
import ForHome from "./pages/ForHome";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Rouming from "./pages/Rouming";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rouming" element={<Rouming />} />
        <Route path="/forHome" element={<ForHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
