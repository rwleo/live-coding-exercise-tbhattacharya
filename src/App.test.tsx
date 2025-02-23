import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the form', () => {
  render(<App />);

  const formElement = screen.getByLabelText(/The Form/i);

  expect(formElement).toBeInTheDocument();
});
