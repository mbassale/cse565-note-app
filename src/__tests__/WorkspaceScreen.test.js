import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('WorkspaceScreen component with Navigation', async () => {
  // Render your whole App
  render(
      <App />
  );

  // Initial route is set to '/', find the first workspace (Workspace #1) and click it
  const workspaceButton = screen.getByRole('link', { name: /Workspace #1/i });
  // Wait for the screen to update after the click
  await userEvent.click(workspaceButton);

  // The WorkspaceScreen component should have 3 Notes
  const noteLinks = await screen.findAllByText(/Note #\d/i);
  expect(noteLinks).toHaveLength(3);

  // Check if the new screen contains a note with title 'Note #1'
  expect(screen.getByText('Note #1')).toBeInTheDocument();

  // Initial route is set to '/', find the first workspace (Workspace #1) and click it
  const noteButton = screen.getByRole('link', { name: /Note #1/i });
  // Wait for the screen to update after the click
  await userEvent.click(noteButton);

  // Check if the new screen contains a note with title 'Note #1'
  expect(screen.getByText('Note #1')).toBeInTheDocument();
});
