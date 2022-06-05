import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <div className='flex'>
        <div>
          <SideBar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
