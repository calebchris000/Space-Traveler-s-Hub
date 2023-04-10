import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import NavHeader from './components/NavHeader';
import RocketPage from './components/Rocket';

const App = () => (
  <>
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Rocket" element={<RocketPage imgURL="https://i.imgur.com/DaCfMsj.jpg" />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
