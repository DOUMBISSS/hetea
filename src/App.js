import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Accueil from "./Pages/Accueil"
import Presentation from "./Pages/Presentation";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
import Formations from './Pages/Formations';
import Continue from './Pages/Continue';
import Campus from './Pages/Campus';


function App() {
  return (
      <>
        <Routes>
          <Route exact path="/" element={<Accueil />} />
          <Route path="/contactez--nous" element={<Contact />} />
          <Route path="/Notre--actualité" element={<Info />} />
          <Route path="/Qui--sommes-nous" element={<Presentation />} />
          <Route path="/Nos__formations" element={<Formations />} />
          <Route path="/Nos__formations__continue" element={<Continue />} />
          <Route path="/Campus" element={<Campus />} />
        </Routes>
      </>
  );
}

export default App;
