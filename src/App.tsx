import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navigate, Route, Routes } from 'react-router-dom';
import EditNotePage from './pages/EditNotePage';
import MainPage from './pages/MainPage';
import NewNotePage from './pages/NewNotePage';
import ViewNotePage from './pages/ViewNotePage';

export type Note = {
  id: string;
} & NoteData;

export type Tag = {
  id: string;
  label: string;
};
export type NoteData = {
  title: string;
  markdown: string;
  tags: Tag[];
};
function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<NewNotePage />} />
        <Route path="/:id">
          <Route index element={<ViewNotePage />} />
          <Route path="edit" element={<EditNotePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
