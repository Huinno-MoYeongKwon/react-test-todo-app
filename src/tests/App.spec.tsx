import React from "react";

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";

test("컴포넌트 렌더링 테스트", async () => {
  renderWithProviders(<App />);

  expect(screen.getByText(/증가/i)).toBeInTheDocument();
  expect(screen.getByText(/감소/i)).toBeInTheDocument();
});

describe("counter 테스트", () => {
  test("100번 누르면 메시지가 나타난다.", async () => {
    renderWithProviders(<App />);

    for (let i = 0; i < 100; i++) {
      fireEvent.click(screen.getByText(/증가/i));
    }

    //3초 대기
    await new Promise((resolve) => setTimeout(resolve, 3000));

    expect(screen.getByText(/100 번 누르셨습니다./i)).toBeInTheDocument();
  });

  test("100단위로 누르지 않으면 메시지는 나오지 않는다.", async () => {
    renderWithProviders(<App />);

    for (let i = 0; i < 99; i++) {
      fireEvent.click(screen.getByText(/증가/i));
    }

    //3초 대기
    await new Promise((resolve) => setTimeout(resolve, 3000));

    expect(screen.queryByText(/100 번 누르셨습니다./i)).not.toBeInTheDocument();
  });
});
