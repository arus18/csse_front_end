import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddSupplier from "./pages/Suppliers/Add";

import NavBar from "./components/NavBar";
import SupplierList from "./pages/Suppliers/Table";


function App() {
  return (
    <>
    <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/order/:orderId" element={<Order/>} />
          <Route path="/supplierlist" element={<SupplierList/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
