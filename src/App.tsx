import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Stores from './pages/Stores/Stores';
import NavBarEl from './components/NavBAr/NavBarEl';

function App() {
  

  return (
    <>
    <NavBarEl />
    
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/stores' element={<Stores />} />
        </Routes>
      </Container>
      
      </>
      
    
  );
}

export default App;
