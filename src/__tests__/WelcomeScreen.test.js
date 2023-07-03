import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('from welcome screen navigates to workspace page on button click', async () => {
  // Render your whole App
  render(
      <App />
  );

  // Initial route is set to '/', find the first workspace (Workspace #1) and click it
  const button = screen.getByRole('link', { name: /Workspace #1/i });
  // Wait for the screen to update after the click
  await userEvent.click(button);

  // Check if the new screen contains a note with title 'Note #1'
  expect(screen.getByText('Note #1')).toBeInTheDocument();
});
