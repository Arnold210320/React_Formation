import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Produits from "./pages/Produits";
import Histoire from "./pages/Histoire";
import Ajout from "./pages/Ajout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/histoire" element={<Histoire />} />
            <Route path="/produits/:id" element={<Ajout />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
