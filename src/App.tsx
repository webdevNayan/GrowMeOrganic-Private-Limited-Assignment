import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={FirstPage} />
        <Route path="/second-page" Component={SecondPage} />
      </Routes>
    </Router>
  );
}

export default App;
