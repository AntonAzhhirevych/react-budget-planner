import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addsExpenses } from '../../redux/expenseForm/expenseFormActions';

// const mapStateToProps = (state, props) => ({});

const mapDispatchToProps = dispatch => ({
  newExpenses: exp => dispatch(addsExpenses(exp)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
