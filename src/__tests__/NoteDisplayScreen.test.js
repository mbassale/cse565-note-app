import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('Note display screen shows a note text', async () => {
  // Render the App
  render(
      <App />
  );

  // Find the first workspace (Workspace #1) and click it
  const workspaceButton = screen.getByRole('link', { name: /Workspace #1/i });
  await userEvent.click(workspaceButton);

  // Check if the new screen contains a note with title 'Note #1'
  expect(screen.getByText('Note #1')).toBeInTheDocument();

  // Check if the new screen contains a note with title 'Note #1'
  const noteButton = screen.getByRole('link', { name: /Note #1/i });
  // Navigate to the note screen
  await userEvent.click(noteButton);

  // Check if the NoteDisplayScreen component contains a note with title 'Note #1'
  expect(screen.getByText('Note #1')).toBeInTheDocument();
  // Check if the NoteDisplayScreen screen has a text area with at least 50 words
  const contentTextArea = screen.getByTestId('content-text-area');
  expect(contentTextArea).toBeInTheDocument();
  expect(contentTextArea.textContent.split(' ').length).toBeGreaterThanOrEqual(50);
  // Check if we have a navigation button
  const navigationButton = screen.getByTestId('navigation-button');
  expect(navigationButton).toBeInTheDocument();
});