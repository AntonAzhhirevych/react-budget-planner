import React, { Component } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

//1-add a budget from the form to local state
//2-through props we transfer data to the BudegetFormContainer

export default class BudgetForm extends Component {
  state = { budget: 0 };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    const { addBudget } = this.props;
    const { budget } = this.state;
    e.preventDefault();
    addBudget(budget);
    this.reset();
  };

  reset = () => {
    this.setState({
      budget: 0,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={this.state.budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}
