import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toHaveAttribute } from '@testing-library/jest-dom';
import App from '../../App/App';

test('Editing one input field updates the other', async () => {
  const { getByLabelText } = render(<App />);

  await userEvent.type(getByLabelText('Dante'), 'Hey there');
  expect(getByLabelText('Virgil')).toHaveAttribute('value', 'Hey there');
});
