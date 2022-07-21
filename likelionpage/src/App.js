import Header from './Header';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Depart from './Depart';
import Footer from './Footer';
import People from './People';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/people' element={<Depart />}>
              <Route path=":departId" element={<People />}>
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
