import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import NavHeader from './components/NavHeader';
import RocketPage from './components/Rocket';
import MissionPage from './components/Mission';

const App = () => (
  <>
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route index path="/" element={<RocketPage />} />
        <Route path="/rocket" element={<RocketPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
