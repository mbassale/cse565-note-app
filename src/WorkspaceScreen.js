import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';
import { BsFiletypeTxt, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Workspace = ({ workspace }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note #1', content: loremIpsum({ count: 1, units: 'paragraphs' }) },
    { id: 2, title: 'Note #2', content: loremIpsum({ count: 1, units: 'paragraphs' }) },
    { id: 3, title: 'Note #3', content: loremIpsum({ count: 1, units: 'paragraphs' }) },
  ]);

  return (
    <div className="container">
      <h1 className="my-3">{workspace.name}</h1>
      <div className="list-group">
        {notes.map(note => (
          <Link to={`/note/${note.id}`} key={note.id} className="list-group-item list-group-item-action">
            <BsFiletypeTxt style={{ marginRight: '0.2rem', paddingBottom: '0.1rem' }} />
            {note.title}
          </Link>
        ))}
      </div>
      <Link to={`/workspace/${workspace.id}/note/new`} className="btn btn-primary mt-3"
        style={{ marginRight: '0.3rem' }} data-testid="create-new-note-button">Create New Note</Link>
      <Link to="/" className="btn btn-success mt-3" data-testid="back-button">
        <BsFillArrowLeftCircleFill style={{ marginRight: '0.2rem', paddingBottom: '0.1rem' }} /> Back to Welcome Screen
      </Link>
    </div>
  );
};

export default Workspace;
