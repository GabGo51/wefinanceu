import styled from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Product from "./components/Product/Product";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Container>
      
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export default App;
