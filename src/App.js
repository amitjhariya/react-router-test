
import { Route, Routes } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link 
          to="/about">About
        </Link>
        <Link 
          to="/">Home
        </Link>
        <Link 
          to="/contact">Contact
        </Link>
       <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
