import Values from './Values';
import { connect } from 'react-redux';
import { getBudget, getExpenses, getBalance } from '../../redux/values/valuesSelectors';

const mapStateToProps = (state, props) => ({
  budget: getBudget(state),
  balance: getBalance(state),
  expenses: getExpenses(state),
});

export default connect(
  mapStateToProps,
  null,
)(Values);
