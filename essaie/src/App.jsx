import Counter from "./pages/Counter/Counter";
import Fruity from "./pages/Fruity/Fruity";
import Users from "./pages/Users/Users";
import Chrono from "./pages/Chrono/Chrono";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-slate-700">
      <div className="mx-auto">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/fruity" element={<Fruity />} />
            <Route path="/users" element={<Users />} />
            <Route path="/chrono" element={<Chrono />} />
          </Routes>
          <Footer />
        </Router>
        {/* 1.*/}
        {/* 2. */}
        {/* 3.*/}
        {/**/}
      </div>
    </div>
  );
}

export default App;
