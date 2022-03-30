import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy Routing website!!!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="" />
      </Routes>
    </div>
  );
}

export default App;
