import React from 'react';
import { render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';
import App from './App';

it('App renders two input fields', () => {
  const { getByLabelText } = render(
    <App />
  );

  expect(getByLabelText("Dante")).toBeTruthy();
  expect(getByLabelText("Virgil")).toBeTruthy();
});
