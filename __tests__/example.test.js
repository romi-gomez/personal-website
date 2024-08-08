import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ExampleComponent from '../ExampleComponent';

test('renders example component', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('Example Component')).toBeInTheDocument();
});