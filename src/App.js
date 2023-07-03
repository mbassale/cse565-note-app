import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';
import Workspace from './Workspace';
import NoteTakingScreen from './NoteTakingScreen';
import NoteDisplayScreen from './NoteDisplayScreen';

const App = () => {
  const [workspaces, setWorkspaces] = useState([
    { id: 1, name: 'Workspace #1' },
    { id: 2, name: 'Workspace #2' },
    { id: 3, name: 'Workspace #3' },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen workspaces={workspaces} />} />
        <Route path="/workspace/:id" element={<Workspace workspace={{ id: 1, name: "test" }} />} />
        <Route path="/workspace/:id/note/new" element={<NoteTakingScreen saveNote={() => {}} />} />
        <Route path="/note/:id" element={<NoteDisplayScreen note={{ id: 1, title: "test", content: "test" }} />} />
      </Routes>
    </Router>
  );
};

export default App;
