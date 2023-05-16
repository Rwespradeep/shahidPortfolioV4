import "./App.css";
import Aboutme from "./components/Aboutme";
import Contactus from "./components/Contactus";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Hero />
              <Portfolio />
              <Aboutme />
              <Contactus />
            </>
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
