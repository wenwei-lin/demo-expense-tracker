import { Route, Routes } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App bg-gray-100 h-screen">
      <div className='flex relative p-16 pb-0'>
        <div className='w-72'>
          <SideBar />
        </div>
        <div className='w-full'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
