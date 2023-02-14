import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Textarea, Input, Button } from '../components/UI';
import { useCreateDate } from '../hooks/useCreateData';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';

interface EditNoteProps {
  notes: any;
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

export const EditNote: React.FC<EditNoteProps> = ({ notes, setNotes }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const note = notes.find((note: Notes) => note.id == id);
  const [title, setTitle] = React.useState(note.title);
  const [details, setDetails] = React.useState(note.details);
  const date = useCreateDate();

  console.log(note);

  const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (title && details) {
      const newNote = {
        ...note,
        title,
        details,
        date,
      };

      const newNotes = notes.map((n: Notes) => {
        if (n.id === id) {
          n = newNote;
        }
        return n;
      });
      setNotes(newNotes);
    }

    navigate('/');
  };

  const handleDelete = () => {
    const newNotes = notes.filter((n: any) => n.id !== id);

    setNotes(newNotes);
    navigate('/');
  };

  const onKeyDown = (e: any) => {
    e.key === 'Enter' && handleForm(e);
  };

  return (
    <section>
      <header className="create-note__header">
        <form className="create-note__form" onSubmit={handleForm} onKeyDown={onKeyDown}>
          <div className="btn-container">
            <Link to="/" className="btn-back">
              <Button className="btn-lg">
                <IoIosArrowBack />
              </Button>
            </Link>
            <Link to="/">
              <Button className="btn-save">Save</Button>
            </Link>
            <Button className="btn-danger" onClick={handleDelete}>
              <RiDeleteBin6Line />
            </Button>
          </div>
          <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea
            rows={28}
            placeholder="Note details..."
            title="Enter for send"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </form>
      </header>
    </section>
  );
};
