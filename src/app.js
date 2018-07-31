import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';

const store = configureStore();



store.subscribe(() => {

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);


});


store.dispatch(addExpense({ description: 'Water Bill', amount: 100}));
store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000}));
store.dispatch(addExpense({ description: 'Electricity Bill', createdAt: 5000, amount: 20}));
store.dispatch(addExpense({ description: 'Rent', amount: 50000}));


// store.dispatch(sortByAmount());


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
