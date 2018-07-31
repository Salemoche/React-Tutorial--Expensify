import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => (
  <li>
    <Link to= {`edit/${props.id}`} >{props.description} </Link>
    <p>{props.amount}</p>
    <p>{props.createdAt}</p>
  </li>
);

export default ExpenseListItem;
