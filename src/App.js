import { Route, Routes } from 'react-router-dom';
import '../src/styles/global.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import '../src/styles/global.css'


function App() {
  return (
   <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

   </>
  );
}

export default App;
