import React from 'react'
import { render, fireEvent, waitFor, screen, RenderResult } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DivForm from '.';

describe('', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<DivForm />);
  });
  test('', () => {
    expect(true); 
    renderResult.debug();
  });
});
