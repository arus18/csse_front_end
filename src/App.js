import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Order from "./Order";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/order/:orderId" element={<Order/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
