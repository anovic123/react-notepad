import React from 'react';
import { v4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateDate } from '../hooks/useCreateData';
import { Input, Button, Textarea } from '../components/UI';
import { IoIosArrowBack } from 'react-icons/io';

interface CreateNoteProps {
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>;
}

export const CreateNote: React.FC<CreateNoteProps> = ({ setNotes }) => {
  const [data, setData] = React.useState<{ title: string; details: string }>({
    title: '',
    details: '',
  });
  const date = useCreateDate();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any): void => {
    e.preventDefault();
    if (data.title && data.details) {
      const note: Notes = { id: v4(), title: data.title, details: data.details, date };
      setNotes((prev: Notes[]) => [note, ...prev]);

      navigate('/');
    }
  };

  const onKeyDown = (e: any) => {
    e.key === 'Enter' && handleSubmit(e);
  };

  return (
    <section>
      <header className="create-note__header">
        <form className="create-note__form" onSubmit={handleSubmit} onKeyDown={onKeyDown}>
          <div className="create-note__actions btn-container">
            <Button className="btn-lg">
              <Link to="/" className="btn-back">
                <IoIosArrowBack />
              </Link>
            </Button>
            <Link to="/" onClick={handleSubmit}>
              <Button className="btn-save" type="submit">
                Save
              </Button>
            </Link>
          </div>
          <Input placeholder="Title" name="title" value={data.title} onChange={onChange} />
          <Textarea
            rows={28}
            name="details"
            placeholder="Note details"
            title="Enter for send"
            value={data.details}
            onChange={onChange}
          />
        </form>
      </header>
    </section>
  );
};
