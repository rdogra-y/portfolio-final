import { render, screen } from '@testing-library/react';
import Resources from './Resources';

test('renders Resources section title', () => {
  render(<Resources />);
  const title = screen.getByText(/resources/i);
  expect(title).toBeInTheDocument();
});
