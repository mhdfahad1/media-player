import './App.css';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import WatchHistory from './Pages/WatchHistory';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    < >
      <Header />

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watch-history" element={<WatchHistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
