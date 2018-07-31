import { createStore } from 'redux';

const incrementCount = ( { incrementBy = 1 } = {} ) => ({ //this is destructured and defaulted to an empty object (in case there is none)
  type: 'INCREMENT',
  incrementBy // incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const reset = () => ({
  type: 'RESET'
})

const set = ( { setValue = 0 } = {} ) => ({
  type: 'SET',
  setValue
});

const reducer = ((state = {count: 0}, action ) => {


  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.setValue
      }
    default:
      return state;
  }
});

const store = createStore(reducer);



const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount( { incrementBy: 5 } ));

store.dispatch(decrementCount( { decrementBy: 5 } ));

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(set( { setValue: 50 } ));

unsubscribe();
