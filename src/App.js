// import logo from './logo.svg';
import './App.css';
import { MemoryRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

// Components
import Home from "./Home";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
	  <MemoryRouter>
		  <NavBar />
			<Routes>
				<Route path="/" element={ <Home site="home"/> } />
				<Route path="/leetcode" element={ <Home site="leetcode" /> } />
				<Route path="/codechef" element={ <Home site="codechef" /> } />
				<Route path="/codeforces" element={ <Home site="codeforces" /> } />
			</Routes>
	  </MemoryRouter>
   </div>
  );
}

export default App;
