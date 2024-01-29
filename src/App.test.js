import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  test('renders chat component', () => {
    render(<App />);
    const chatComponent = screen.getByText(/send/i);
    expect(chatComponent).toBeInTheDocument();
  });

  test('sends and receives messages', async () => {
    render(<App />);
  
    const input = screen.getByRole('textbox');
    const sendButton = screen.getByText(/send/i);
    fireEvent.change(input, { target: { value: 'Hello, bot!' } });
    fireEvent.click(sendButton);
  
    await waitFor(() => {
      const botResponse = screen.getByTestId('bot');

      expect(botResponse).toBeInTheDocument();
    });
  });
});
