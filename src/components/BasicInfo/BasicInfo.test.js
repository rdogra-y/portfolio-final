// src/components/BasicInfo/BasicInfo.test.js
import { render, screen } from '@testing-library/react';
import BasicInfo from './BasicInfo';

test('renders Rakshita Dogra name', () => {
  render(<BasicInfo />);
  const nameElement = screen.getByText(/Rakshita Dogra/i);
  expect(nameElement).toBeInTheDocument();
});
