import ExpensesTable from './ExpensesTable';
import { connect } from 'react-redux';
import { getItems } from '../../redux/expenseTable/expenseTableSelectors';

const mapStateToProps = (state, props) => ({
  items: getItems(state),
});

export default connect(
  mapStateToProps,
  null,
)(ExpensesTable);
