import { connect } from 'react-redux';
import { SendMessage } from './SendMessage';
import { loadMessages } from '../../store/actions';

function mapState2Props(state) {
  return {
    listUser: state.listUser,
    listPost: state.listPost,
    listMessage: state.listMessage,
    isLoading: state.isLoading,
    error: state.error,
  };
}

const mapDispatch2Props = {
  loadMessages,
};

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(SendMessage);

export { Enhanced as SendMessage };