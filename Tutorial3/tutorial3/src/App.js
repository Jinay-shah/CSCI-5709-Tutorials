import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileRegistration from './Components/ProfileRegistration';
import ProfilePage from './Components/ProfilePage';

import './App.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileRegistration />} />
        <Route path="/profile" element={<ProfilePage />}/>
      </Routes>
    </Router>
  );
}

export default App;