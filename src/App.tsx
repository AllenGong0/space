import { Routes, Route } from "react-router-dom"
import "./App.css"
import ContentEditAble from "./pages/Contenteditable"
import CustomForm from "./pages/CustomForm"
import FileUpload from "./pages/FileUpload"
import Media from "./pages/Media/index"
import MyLottie from "./pages/MyLottie"
import RxComp from "./pages/RxComp"
import JsonScheam from "./pages/JsonScheam"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<JsonScheam />} />
        {/* <Route path="/" element={<CustomForm />} /> */}
        {/* <Route path="about" element={<Demo />} /> */}
        {/* <Route path="product/:filterText/:inStockOnly" element={<FilterableProductTable />} /> */}
      </Routes>
    </div>
  )
}

export default App
