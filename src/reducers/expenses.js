const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => { // remember: this state is an array

  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        return action.expense.id !== expense.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        // expense.id === action.id ? expense.amount = action.updates : expense.amount;
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
