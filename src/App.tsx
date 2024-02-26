import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Flavors from './pages/flavors/Flavors';
//import '@cloudscape-design/global-styles/dist/index.css'

export default function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/flavors" element={<Flavors  />} />
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
