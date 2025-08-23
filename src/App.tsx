import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstWeek from "./components/FirstWeek";
import SecondWeek from "./components/SecondWeek";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center items-center p-14">
        <h1 className="text-4xl mb-24">Click to go and see completed tasks</h1>
        <ul className="text-2xl underline flex flex-col gap-7 ">
          <li>
            <Link to="/first-week">First Week Tasks</Link>
          </li>
          <li>
            <Link to="/second-week">Second Week Tasks</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/first-week" element={<FirstWeek />} />
        <Route path="/second-week/*" element={<SecondWeek />} />
      </Routes>
    </Router>
  );
}

export default App;
