import { Routes, Route } from "react-router-dom"
import "./App.css"
import FileUpload from "./pages/FileUpload"
import Media from "./pages/Media/index"
import MyLottie from "./pages/MyLottie"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MyLottie />} />
        {/* <Route path="about" element={<Demo />} />
        <Route path="product/:filterText/:inStockOnly" element={<FilterableProductTable />} /> */}
      </Routes>
    </div>
  )
}

export default App
