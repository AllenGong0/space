import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import CustomForm from './pages/CustomForm';
import Demo from './pages/Demo';
import FilterableProductTable from './pages/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomForm />} />
        <Route path="about" element={<Demo />} />
        <Route path="product/:filterText/:inStockOnly" element={<FilterableProductTable />} />
      </Routes>
    </div>
  );
}

export default App;
