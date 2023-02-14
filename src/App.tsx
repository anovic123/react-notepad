import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateNote } from './pages/CreateNote';
import { EditNote } from './pages/EditNote';
import { Notes } from './pages/Notes';

export const App = () => {
  const [notes, setNotes] = React.useState<Notes[]>(
    JSON.parse(localStorage.getItem('notes') || '[]'),
  );

  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route path="/create-note" element={<CreateNote setNotes={setNotes} />} />
          <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};
