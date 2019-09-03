import BudgetForm from './BudgetForm';
import { getValue } from '../../redux/budgetForm/budgetFormSelectors';

import { connect } from 'react-redux';
// import budgetFormReducer from '../../redux/BudgetForm/BudgetReducer';
import { setBudget } from '../../redux/budgetForm/budgetAction';

const mapStateToProps = state => ({
  value: getValue(state),
});

const mapDispatchToProps = {
  addBudget: value => setBudget(value),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BudgetForm);
