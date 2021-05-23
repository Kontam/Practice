import React from "react";
import { fireEvent, getByRole, render, RenderResult, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DivForm from ".";

describe("divForm", () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    // 準備処理 テスト対象Componentの描画
    renderResult = render(<DivForm />);
  });
  afterEach(() => {
    // テスト終了後処理 テスト対象のアンマウント
    renderResult.unmount();
  });
  describe("初期状態", () => {
    test("フォームの見出しが表示されている", async () => {
      await waitFor(() => {
        // 見出しはheadingロールで取得したい
        expect(renderResult.getByText("Test Form"));
      })
    });
    test("submitボタンが非活性状態になっている", async () => {
      //
    });
  });
  describe("画面機能", () => {
    describe("nameフィールドに値を入力した時", () => {
      let nameTextField: HTMLElement
      beforeEach(async () => {
        await waitFor(() => {
          // Labelを読んで対応するテキストボックスにしたい
          nameTextField = renderResult.getByRole("textbox");
        });
        // nameフィールドに'Kontam'を入力する
        fireEvent.change(nameTextField, { target: { value: 'Kontam' } });
      })
      test("フィールドに値が反映される", async () => {
        await waitFor(() => {
          expect(nameTextField).toHaveValue('Kontam');
        })
      });
    });
    test("nameとanimalsを入力するとボタンが活性化する", async () => {
      // todo

    });
  });
});
