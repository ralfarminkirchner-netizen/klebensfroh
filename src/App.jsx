import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galerie" element={<Gallery />} />
          <Route path="auftraege" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
