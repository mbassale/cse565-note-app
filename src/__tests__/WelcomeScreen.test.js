import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('from welcome screen navigates to workspace page on button click', async () => {
  // Render your whole App
  render(
      <App />
  );

  // Find the first workspace (Workspace #1) and click it
  const button = screen.getByRole('link', { name: /Workspace #1/i });
  await userEvent.click(button);

  // The WorkspaceScreen component should have 3 Notes
  const noteLinks = await screen.findAllByText(/Note #\d/i);
  expect(noteLinks).toHaveLength(3);

  // Check if the new screen contains a note with title 'Note #1'
  const firstNote = noteLinks[0];
  expect(firstNote.textContent).toEqual('Note #1');

  // Check if we have navigation buttons
  expect(screen.getByText('Create New Note')).toBeInTheDocument();
  expect(screen.getByText('Back to Welcome Screen')).toBeInTheDocument();
});
