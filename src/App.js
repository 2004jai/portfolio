import { Routes, Route, Navigate } from 'react-router-dom';
import Sponsors from './pages/SponsorsPage';
import HomePage from './pages/HomePage';
import './css/App.css';
import Background from './components/Background';
import ActivitiesPage from './pages/ActivitiesPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <div className='App'>
    <Background />
      <Routes>
        <Route path={'/'} element={<Navigate to='/home' />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/sponsors'} element={<Sponsors />} />
        <Route path={'/events'} element={<ActivitiesPage />} />
        <Route path={'/register'} element={<RegisterPage />} />
        <Route path={'/activities'} element={<Navigate to='/events' />} />
        <Route path={'*'} element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
