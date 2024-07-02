import {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Conctact from './components/Conctact';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Analytics from './pages/Analytic/Analytics';
import CyberSecur from './pages/Analytic/CyberSecur';
import Devellopment from './pages/Analytic/Devellopment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Conctact />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/analytics" element={<Analytics />}>
            <Route path="/analytics/cybersecur" element={<CyberSecur />} />
            <Route path="/analytics/devellopment" element={<Devellopment />} />
          </Route>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
