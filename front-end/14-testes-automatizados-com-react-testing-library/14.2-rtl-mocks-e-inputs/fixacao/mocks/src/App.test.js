// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

const joke = {
  id: "7h3oGtrOfxc",
  joke: "Whiteboards ... are remarkable.",
  status: 200,
};

const newJoke = {
  id: "R7UfaahVfFd",
  joke: "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  status: 200,
};

afterEach(() => jest.clearAllMocks());

beforeEach(() => {
  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(joke),
  });

  jest.spyOn(global, "fetch");
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(newJoke),
  });

})

it("fetches a joke", async () => {

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
  render(<App />);
  const btnNewJoke = screen.getByRole("button");
  const renderedJoke = await screen.findByText(
    "Whiteboards ... are remarkable."
  );

  expect(renderedJoke).toBeInTheDocument();
  
  userEvent.click(btnNewJoke);
  const renderedNewJoke = await screen.findByText(
    "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."
  );

  expect(renderedNewJoke).toBeInTheDocument();
  expect(screen.queryByText(joke.joke)).not.toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(2);
  expect(global.fetch).toBeCalledWith("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
});
