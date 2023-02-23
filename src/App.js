import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Homepage from "./Components/Homepage.js";
import Product from "./Components/Product.js";


function App() {
  return (
      <div className="App">
          <header>
              <nav>
                  <div className="logo">
                      <h1> <a href=""> Grandpa's Toolbox </a></h1> {/*This simplest way of refreshing the page. */}
                  </div>

                  <ul>
                      <li><a href="./"> Home </a> </li>
                      <li><a href="/Products"> Products </a> </li>
                      <li className="nav-cta"><a href="#"> Connect </a></li>
                  </ul>
              </nav>
          </header>


          <Router>
              <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/Products" element={<Product />} />
              </Routes>

          </Router>

      </div>
  );
}

export default App;
