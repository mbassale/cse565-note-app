import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

const NoteDisplayScreen = ({ note }) => {
  const text = loremIpsum({ count: 1, units: 'paragraphs' });
  return (
    <div className="container">
      <h1 className="my-3">{note.title}</h1>
      <textarea readOnly={true} value={text} className="form-control mb-3" />
      <Link to="/workspace/1" className="btn btn-primary mt-3">Back to Workspace</Link>
    </div>
  );
};

export default NoteDisplayScreen;
