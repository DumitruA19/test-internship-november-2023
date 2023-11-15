import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
