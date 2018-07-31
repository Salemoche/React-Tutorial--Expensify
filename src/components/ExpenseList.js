import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <ul>
      {
        props.expenses.map((expense) => {
          return (
            <ExpenseListItem
              // description={expense.description}
              // amount={expense.amount}
              // createdAt={expense.createdAt}
              {...expense} // same thing
              key={expense.id}
            />
          )

        })
      }
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) //instead of taking the direct value from state.expenses we filter it with the previously created and imported expenses selector
  }
};

export default connect(mapStateToProps)(ExpenseList);
