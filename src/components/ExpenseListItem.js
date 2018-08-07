import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => (
  <li>
    <Link to= {`edit/${props.id}`} >{props.description} </Link>
    <p>
      {numeral(props.amount / 100 ).format('$0,0.00')}
       - 
      {moment(props.createdAt).format('DD MMMM YYYY')}
    </p>
  </li>
);

export default ExpenseListItem;
