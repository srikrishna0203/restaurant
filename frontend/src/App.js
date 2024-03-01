import './App.css';
import { BrowserRouter ,Route,Routes } from "react-router-dom"
import Nav from './nav';
import About from './pages/About';
import Home from './pages/Home'
import Menu from './pages/Menu'
import Reserve from './pages/Reserve';
import Timer from './pages/Timer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/reserve' element={<Reserve/>}/>
          <Route path='/timer' element={<Timer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
