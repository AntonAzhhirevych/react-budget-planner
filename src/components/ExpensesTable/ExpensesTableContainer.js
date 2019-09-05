import ExpensesTable from './ExpensesTable';
import { connect } from 'react-redux';
import { getItems } from '../../redux/expenseForm/expenseSelectors';
import { deleteExpense } from '../../redux/expenseForm/expenseFormActions';

//connect

const mapStateToProps = (state, props) => ({
  items: getItems(state),
});

const mapDispathToProps = dispatch => ({
  onRemove: id => dispatch(deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(ExpensesTable);
