import React, { Component } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

import uuid from 'uuid';
const labelStyles = `
  margin-bottom: 16px;  
`;

//1-add a Expence from the form to local state
//2-through props we transfer data to the ExpenceFormContainer

export default class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
    id: null,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { newExpenses } = this.props;
    e.preventDefault();

    newExpenses(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', amount: 0, id: uuid() });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}
