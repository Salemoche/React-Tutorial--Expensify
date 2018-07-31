import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// actions

// const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });
//
// const removeExpense = ( {id} = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   expense: {
//     id
//   }
// });
//
// const editExpense = (id, updates) => ( {
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });
//
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });
//
// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT'
// });
//
// const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// });
//
// const setStartDate = (startDate) => ({
//   type: 'SET_START_DATE',
//   startDate
// });
//
// const setEndDate = (endDate) => ({
//   type: 'SET_END_DATE',
//   endDate
// });


// expenses reducer

// const expensesReducerDefaultState = [];
//
// const expensesReducer = (state = expensesReducerDefaultState, action) => { // remember: this state is an array
//
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state,
//         action.expense
//       ];
//     case 'REMOVE_EXPENSE':
//       return state.filter((expense) => {
//         return action.expense.id !== expense.id;
//       });
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         // expense.id === action.id ? expense.amount = action.updates : expense.amount;
//         if (expense.id === action.id) {
//           return {
//             ...expense,
//             ...action.updates
//           };
//         } else {
//           return expense;
//         }
//       });
//     default:
//       return state;
//   }
// };

// filters reducer

// const filtersReducerDefaultState = {
//
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
//
// };
//
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//
//   switch (action.type) {
//
//     case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       };
//     case 'SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       };
//     case 'SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       };
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.startDate
//       };
//     case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.endDate
//       };
//     default:
//       return state;
//   }
//
// }

// get visible expenses

// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
//   return expenses.filter((expense) => {
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//
//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a,b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     } else {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };

// store creation

// const store = createStore(
// 	combineReducers( {
// 		expenses: expensesReducer,
//     filters: filtersReducer
// 	})
// );

store.subscribe(() => {

  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);

});

const expenseOne = store.dispatch(addExpense( {description: 'Rent', amount: '100', createdAt: -1000} ));
const expenseTwo = store.dispatch(addExpense( {description: 'Coffee', amount: '300', createdAt: 1000} ));
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: '500'}));
//
//
store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));



const demoState = {
  expenses: [
    {
      id: "aoöisdjföa",
      description: 'This and that expense',
      note: 'this was the final rent',
      amout: 53000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // or date
    startDate: undefined,
    endDate: undefined
  }
}
