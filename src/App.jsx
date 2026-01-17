import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Rouming from "./pages/Rouming";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rouming" element={<Rouming />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
