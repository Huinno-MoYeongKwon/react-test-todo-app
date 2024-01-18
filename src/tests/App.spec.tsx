import React from "react";
// import { http, HttpResponse, delay } from "msw";
// import { setupServer } from "msw/node";
import { fireEvent, screen } from "@testing-library/react";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "./utils/test-utils";
import App from "../App";

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
// export const handlers = [
//   http.get("/api/user", async () => {
//     await delay(150);
//     return HttpResponse.json("John Smith");
//   }),
// ];

// const server = setupServer(...handlers);

// Enable API mocking before tests.
// beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
// afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
// afterAll(() => server.close());

test("컴포넌트 렌더링 테스트", async () => {
  renderWithProviders(<App />);

  expect(screen.getByText(/즈응가/i)).toBeInTheDocument();
  expect(screen.getByText(/가암소/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/즈응가/i));
  //   fireEvent.click(screen.getByText(/가암소/i));

  //check after 2 seconds

  await new Promise((r) => setTimeout(r, 2000));

  expect(screen.getByText(/1/i)).toBeInTheDocument();

  // // should show no user initially, and not be fetching a user
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

  // // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  // fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
  // expect(screen.getByText(/no user/i)).toBeInTheDocument();

  // // after some time, the user should be received
  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
