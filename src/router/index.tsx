import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={FirstPage} />
        <Route path="/second-page" Component={SecondPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
