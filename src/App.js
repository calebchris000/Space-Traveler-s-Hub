import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import NavHeader from './components/NavHeader';

const App = () => (
  <>
    <BrowserRouter>
      <NavHeader />
      <Routes>
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
