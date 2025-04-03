import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills section title', () => {
  render(<Skills />);
  const title = screen.getByText(/skills/i);
  expect(title).toBeInTheDocument();
});
