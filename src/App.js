import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import WorkspaceScreen from './WorkspaceScreen';
import NoteTakingScreen from './NoteTakingScreen';
import NoteDisplayScreen from './NoteDisplayScreen';
import { loremIpsum } from 'lorem-ipsum';

const App = () => {
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: 'Workspace #1' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen workspaces={workspaces} />} />
        <Route path="/workspace/:id" element={<WorkspaceScreen workspace={{ id: 1, name: "Workspace #1" }} />} />
        <Route path="/workspace/:id/note/new" element={<NoteTakingScreen saveNote={() => { }} />} />
        <Route path="/note/:id" element={<NoteDisplayScreen note={{ id: 1, title: "Note #1", content: loremIpsum({ count: 1, units: 'paragraphs' }) }} />} />
      </Routes>
    </Router>
  );
};

export default App;
