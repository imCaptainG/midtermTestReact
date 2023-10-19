import { BrowserRouter as Router, Routes, Route, Link }
from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoList from './components/create-todo.component';
import NewShop from './components/create-shop.component.js';




function App() {
  return (
    <Router>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-shop">New Shop</Link>
            </li>
          </ul>
        </div>
      </nav>
        

      <Routes>
        <Route path='/' exact Component={TodoList} />
        <Route path="/new-shop" exact Component={NewShop} />
      </Routes>
    </Router>
    );
}

export default App;