import React from 'react';
import { Link } from 'react-router-dom';
import { useCreateDate } from '../hooks/useCreateData';

interface NoteItemProps {
  note: Record<string, string>;
}

export const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const date = useCreateDate();
  const title = note.title.length > 40 ? note.title.substr(0, 40) + '...' : note.title;

  return (
    <div className="note">
      <Link to={`/edit-note/${note.id}`} className="note-link">
        <h4>{title}</h4>
        <p>{note.details}</p>
        <div>{date}</div>
      </Link>
    </div>
  );
};
