import logo from './logo.svg';
import './App.css';
import { AddJobs } from './components/AddJobs';
import {Login} from "./components/Login"
import { Homepage } from './components/Homepage';
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/addJobs" element={<AddJobs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
