import logo from './logo.svg';
import './App.css';
import { AddJobs } from './components/AddJobs';
import {Login} from "./components/Login"
function App() {
  return (
    <div className="App">
      < Login />
      <AddJobs />
    </div>
  );
}

export default App;
