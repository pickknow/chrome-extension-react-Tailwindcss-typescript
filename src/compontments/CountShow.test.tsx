import React from 'react';
import { renderHook, render, screen, act } from '@testing-library/react';
import CountShow from './CountShow';
import '@testing-library/jest-dom';

(global as any).chrome = {
  storage: {
    local: {
      get: jest.fn(),
      set: jest.fn(),
    },
    onChanged: {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    },
  },
};

test('test count show', async () => {
  render(<CountShow  />);
  await screen.findByRole('countInfo')
  const countShow = screen.getByRole('countInfo');
  expect(countShow).toHaveTextContent('0');
})