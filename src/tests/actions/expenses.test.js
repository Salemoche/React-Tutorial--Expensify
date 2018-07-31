import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup removeExpense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    expense: {
      id: '123abc'
    }
  })
})

test('Should setup editExpense action object', () => {
  const expenseData = {
    despcription: 'Rent',
    amount: 10029,
    createdAt: 1000,
    note: 'a rent'
  }

  expect(expenseData).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {}
  })
})

test('Should setup addExpense action object with added values', () => {
  const action = editExpense('123', {});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {}
  })
})
