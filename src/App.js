import { Outlet, useLocation } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
    <div className="App">
      <Header />
      <Outlet location={location} key={location.pathname} />
      <Footer />
    </div>
    </AnimatePresence>
  );
}

export default App;
