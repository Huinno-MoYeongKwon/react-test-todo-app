import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "./utils/test-utils";
import CounterArea from "../app/components/CounterArea";

test("컴포넌트 렌더링 테스트", async () => {
  renderWithProviders(<CounterArea />);

  expect(screen.getByText(/증가/i)).toBeInTheDocument();
  expect(screen.getByText(/감소/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/증가/i));
  fireEvent.click(screen.getByText(/감소/i));
});
