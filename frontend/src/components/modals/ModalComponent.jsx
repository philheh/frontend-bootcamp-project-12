import { useDispatch, useSelector } from 'react-redux';
import getModal from './index';
import { actions as modalActions } from '../../slices/modalSlice';

const ModalComponent = () => {
  const dispatch = useDispatch();
  const isShown = useSelector((state) => state.modal.isShown);
  const modalType = useSelector((state) => state.modal.type);
  const modalId = useSelector((state) => state.modal.id);
  if (!isShown) {
    return null;
  }
  const closeModal = () => dispatch(modalActions.closeModal());
  const Component = getModal(modalType);
  return <Component show={isShown} closeModal={closeModal} id={modalId} />;
};

export default ModalComponent;
