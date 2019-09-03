import ExpensesTable from './ExpensesTable';
import { connect } from 'react-redux';
import { getItems } from '../../redux/expenseTable/expenseTableSelectors';
import { expenseTableAction } from '../../redux/expenseTable/expenseTableActions';

const mapStateToProps = (state, props) => ({
  items: getItems(state),
});

const mapDispathToProps = dispatch => ({
  onRemove: id => dispatch(expenseTableAction(id)),
});

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(ExpensesTable);
