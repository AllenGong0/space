import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CustomForm from './pages/customForm';
import Demo from './pages/Demo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomForm />} />
        <Route path="about" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
