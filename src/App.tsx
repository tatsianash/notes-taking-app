import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import NewNotePage from './pages/NewNotePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/new" element={<NewNotePage />} />
      <Route path="/:id">
        <Route index element={<h1>view</h1>} />
        <Route path="edit" element={<h1>edit</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
