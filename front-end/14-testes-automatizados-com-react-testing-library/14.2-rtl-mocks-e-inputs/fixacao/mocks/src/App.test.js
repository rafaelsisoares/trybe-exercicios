// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

afterEach(() => jest.clearAllMocks());

it("fetches a joke", async () => {
  const joke = {
    id: "7h3oGtrOfxc",
    joke: "Whiteboards ... are remarkable.",
    status: 200,
  };

  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText(
    "Whiteboards ... are remarkable."
  );
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
});

it("fetches a new joke", async () => {
  const joke = {
    id: "7h3oGtrOfxc",
    joke: "Whiteboards ... are remarkable.",
    status: 200,
  };

  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  const newJoke = {
    id: "R7UfaahVfFd",
    joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
    status: 200,
  };

  render(<App />);
  const btnNewJoke = screen.getByRole("button");
  const renderedJoke = await screen.findByText(
    "Whiteboards ... are remarkable."
  );

  expect(renderedJoke).toBeInTheDocument();
  
  userEvent.click(btnNewJoke);

  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(newJoke),
  });

  const renderedNewJoke = await screen.findByText(
    "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
  );

  expect(renderedNewJoke).toBeInTheDocument();
  expect(renderedJoke).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
  expect(global.fetch).toBeCalledWith("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
});
