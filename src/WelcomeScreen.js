import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeScreen = ({ workspaces }) => (
  <div className="container">
    <h1 className="my-3">Welcome to CSE565 Note App</h1>
    <div className="list-group">
      {workspaces.map(workspace => (
        <Link to={`/workspace/${workspace.id}`} key={workspace.id} className="list-group-item list-group-item-action">
          {workspace.name}
        </Link>
      ))}
    </div>
    <Link to="/workspace/new" className="btn btn-primary mt-3">Create New Workspace</Link>
  </div>
);

export default WelcomeScreen;
