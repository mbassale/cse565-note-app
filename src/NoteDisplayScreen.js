import React from 'react';
import { Link } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const NoteDisplayScreen = ({ note }) => {
  const text = loremIpsum({ count: 50, units: 'words' });
  return (
    <div className="container">
      <h1 className="my-3">{note.title}</h1>
      <textarea readOnly={true} value={text} className="form-control mb-3" data-testid="content-text-area" style={{ overflowY: 'auto' }} />
      <Link to="/workspace/1" className="btn btn-primary mt-3" data-testid="navigation-button">
        Back to Workspace
      </Link>
    </div>
  );
};

export default NoteDisplayScreen;
