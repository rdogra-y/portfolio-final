import { render, screen } from '@testing-library/react';
import Work from './Work';

test('renders Work section title', () => {
  render(<Work />);
  const title = screen.getByText(/work/i);
  expect(title).toBeInTheDocument();
});
