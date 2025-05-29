import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Users from "./components/users";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
