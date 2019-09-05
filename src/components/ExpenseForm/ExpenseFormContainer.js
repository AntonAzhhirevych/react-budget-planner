import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpenses } from '../../redux/expenseForm/expenseFormActions';

// connect to redux store

const mapDispatchToProps = dispatch => ({
  newExpenses: exp => dispatch(addExpenses(exp)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
