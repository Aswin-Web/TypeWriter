import './App.css';
import {Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import SIgnup from './pages/Signup/SIgnup';
import Dashboard from './pages/Dashboard/Dashboard';
import Typewriter from './pages/TypewriterUI/Typewriter';
import InitialSetup from './pages/InitialSetup/InitialSetup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SIgnup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="setup" element={<InitialSetup />} />
      <Route path='user' element={<Typewriter/>}/>
    </Routes>
  );
}

export default App;
