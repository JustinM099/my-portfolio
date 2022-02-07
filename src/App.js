import { Outlet, Link } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
