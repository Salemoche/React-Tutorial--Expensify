import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

const now = moment();

console.log(now.format('DD MMM YYYY'));

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: "",
      amount: props.expense ? (props.expense.amount/100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  // state = {
  //   description: "",
  //   note: "",
  //   amount: "",
  //   createdAt: moment(),
  //   calendarFocused: false,
  //   error: ''
  // };

  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({
      description: description
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    } else {
      return;
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({createdAt}));
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please enter a Description and an amount" }))
    } else {
      this.setState(() => ({ error: "" }))
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="test"
            placeholder="Description"
            value={this.state.description}
            autoFocus
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false }
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >

          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
