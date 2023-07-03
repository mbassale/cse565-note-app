import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NoteTakingScreen = ({ saveNote }) => {
  const [note, setNote] = useState('');

  return (
    <div className="container">
      <h1 className="my-3">Create New Note</h1>
      <textarea value={note} onChange={e => setNote(e.target.value)} className="form-control mb-3" />
      <button onClick={() => saveNote(note)} className="btn btn-primary">Save Note</button>
      <Link to="/workspace/1" className="btn btn-success" style={{marginLeft: '0.3rem'}}>Cancel</Link>
    </div>
  );
};

export default NoteTakingScreen;
