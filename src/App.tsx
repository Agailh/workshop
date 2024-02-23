import React from 'react';
import Home from './pages/home/Home';
import Flavors from './pages/home/component/flavors';


export default function App() {
  return (
    <>
      <Home />
      <Flavors data={[]} items={[]} />
    </>
  );
}
