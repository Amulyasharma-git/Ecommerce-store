import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/"  element={<ProductList/>}/>
        <Route exact path="/product/:id"  element={<ProductDetail/>}/>
        <Route>404 Not Found!</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
