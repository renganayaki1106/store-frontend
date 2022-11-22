import './App.css';
import Header from './components/header/Header';
import Home from './screens/Home';
import CombineAuth from './components/auth/CombineAuth';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<CombineAuth />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
