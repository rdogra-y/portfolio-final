import { render, screen } from '@testing-library/react';
import DeveloperSetup from './DeveloperSetup';

test('renders Developer Setup section title', () => {
  render(<DeveloperSetup />);
  const title = screen.getByText(/developer setup/i);
  expect(title).toBeInTheDocument();
});
