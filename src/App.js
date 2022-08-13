// import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Leetcode from "./components/Leetcode";
import All from "./components/All";
import CodeChef from "./components/Codechef";
import CodeForces from "./components/Codeforces";

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<All site="all" />} />
          <Route path="/leetcode" element={<Leetcode site="leet_code" />} />
          <Route path="/codechef" element={<CodeChef site="codechef" />} />
          <Route path="/codeforces" element={<CodeForces site="codeforces" />} />
        </Routes>
      </MemoryRouter>
    </div>
  );
}

export default App;
