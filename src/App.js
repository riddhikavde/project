import logo from './logo.svg';
import './App.css';
import { Navbar } from './routing/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './routing/Home';
import About from './routing/About';
import Contact from './routing/Contact';
import Courses from './routing/Courses';
import Placements from './routing/Placements';

function App() {
  return (

    

     <div className="App">
		<Navbar/>
			<Routes>
			<Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/placements' element={<Placements/>}></Route>
			<Route path='/contact' element={<Contact/>}></Route>
			</Routes> <br/>
		
     {  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
     }
    </div>
     
  );
}

export default App;
