import React, { Component } from 'react';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';
// import { setBudget } from '../../redux/BudgetForm/BudgetAction';
// props.onSave(this.state.budget);

const labelStyles = `
  margin-bottom: 16px;  
`;

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
    console.log(this.props);
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
