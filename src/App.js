import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add_product from "./Add_product";
import View_product from "./View_product";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Add_product" element={<Add_product/>} />
          <Route exact path="/View_product" element={<View_product/>} />
          <Route path="/order/:orderId" element={<Order/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
