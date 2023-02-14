import React from 'react';
import { Link } from 'react-router-dom';
import { NoteItem } from '../components/NoteItem';
import { Input, Button } from '../components/UI';
import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';

interface NotesProps {
  notes: Notes[];
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [notesValue, setNotesValue] = React.useState<string>('');

  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        <div className="notes__header-search">
          <Input
            value={notesValue}
            onChange={(e) => setNotesValue(e.target.value)}
            placeholder="Type something..."
          />
          <Button className="btn-search">
            <CiSearch />
          </Button>
        </div>
      </header>
      <div className="notes__container">
        {notes.length < 1 ? (
          <div className="notes__empty">No Notes</div>
        ) : (
          notes
            .filter((note) => note.title.includes(notesValue.trim()))
            .map((note: Notes) => <NoteItem key={note.id} note={note} />)
        )}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};
