// src/App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

describe('Testing clicks', () => {
  beforeEach(cleanup);
  
  it('the page should have a button and a text "0"', () => {
    renderWithRedux(<App />)
    const buttonAdd = screen.queryByText(/clique aqui/i);

    expect(buttonAdd).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  
  // Utilizaremos o seletor `getByText` para retornar o nó correspondente a uma consulta de texto
  it('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
  
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('a click in a button should increment by 1', () => {
    renderWithRedux(<App />);

    const buttonAdd = screen.queryByText(/clique aqui/i);
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdd);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('a click in a button should increment the value', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });

    const buttonAdd = screen.queryByText(/clique aqui/i);
    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.dblClick(buttonAdd);

    expect(screen.getByText('12')).toBeInTheDocument();
  });
});