import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import './App.css';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'

function App() {


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Gabby's Cleaning</h1>
<Container>
    <Nav defaultActiveKey="/" variant="tabs" bg="light" fill>
        <Nav.Item>
            <Nav.Link href="/"> 
                <Link to="/" style={{color:"black"}}>Home</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"aboutPage"}> 
                <Link to="/about" style={{color:"black"}}>About</Link>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item >
            <Nav.Link eventKey={"servicesPage"}> 
                <Link to="/services" style={{color:"black"}}>Services</Link> 
            </Nav.Link>
         </Nav.Item>
    </Nav>
</Container>

        </header>

        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;

