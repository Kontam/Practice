import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {waitFor, render, screen, fireEvent} from '@testing-library/react';
import UserForm from './UserForm';

describe('UserForm', () => {
  describe('ラジオボタンの選択肢どれかがクリックされた時', () => {
    beforeEach(async () => {
      render(<UserForm />);
      // await waitFor(() => fireEvent.click(screen.getByLabelText('人事部')));
      await waitFor(() => fireEvent.click(screen.getByDisplayValue('1')));
      // await waitFor(() => fireEvent.change(screen.getByLabelText('人事部')));
    });
    test('クリックしたラジオボタンがチェックされる', async () => {
      screen.logTestingPlaygroundURL();
      await waitFor(() =>
        expect(screen.getByLabelText('人事部')).toBeChecked(),
      );
    });

    test('submitボタンが活性化する', async () => {
      await waitFor(() =>
        expect(screen.getByRole('button', {name: 'submit'})).toBeEnabled(),
        {timeout: 3000}
      );
    });
  });
});
