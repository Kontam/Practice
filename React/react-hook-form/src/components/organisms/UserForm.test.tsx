import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import UserForm from './UserForm';

describe("UserForm", () => {
  describe("", () => {
    beforeEach(() => {
      render(<UserForm />);
    });
    test("", () => {
      screen.debug();
    });
  })
});
