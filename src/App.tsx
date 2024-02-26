import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Flavors from './pages/flavors/Flavors';
import FlavorsCreate from './pages/create-flavors/FlavorsCreate';


import '@cloudscape-design/global-styles/index.css'
import  './App.css';

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/flavors" element={<Flavors  />} />
          <Route path="/create-flavors" element={<FlavorsCreate/>} />
        </Routes>
      </>
    </Router>
  );
}




// export default function App() {
//   return (
//     <>
//       <Home />
//       <Flavors data={[]} items={[]} />
//     </>
//   );
// }
