import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Accueil from "./Pages/Accueil"
import Presentation from "./Pages/Presentation";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
import Formations from './Pages/Formations';


function App() {
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/contactez--nous" element={<Contact />} />
          <Route path="/Notre--actualité" element={<Info />} />
          <Route path="/Qui--sommes-nous" element={<Presentation />} />
          <Route path="/Nos__formations" element={<Formations />} />
        </Routes>
      </>
  );
}

export default App;
