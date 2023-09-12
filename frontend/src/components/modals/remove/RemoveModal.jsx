import React, { useEffect, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { actions as channelsActions } from '../../../slices/channelsSlice';
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from '../../../toastConfig';
import useSocket from '../../../hooks/SocketHook';

const RemoveModal = (props) => {
  const { closeModal, id } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const socket = useSocket();
  const currentId = useSelector((state) => state.channels.activeChannelId);
  const callback = () => {
    toast.success(t('toast.removed'), toastConfig);
    closeModal();
  };
  // eslint-disable-next-line no-shadow
  const handleRemove = (id) => {
    try {
      socket.removeChannel(id, callback);
      if (id === currentId) {
        dispatch(channelsActions.setActiveChannelId(1));
      }
    } catch (err) {
      toast.error(t('toast.removeError'), toastConfig);
    }
  };
  const removeBtn = useRef();
  useEffect(() => {
    removeBtn.current.focus();
  }, []);
  return (
    <Modal show onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.removeModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t('modals.removeModal.label')}</p>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" onClick={closeModal} className="me-2">{t('modals.removeModal.cancelBtn')}</Button>
          <Button ref={removeBtn} type="submit" variant="danger" onClick={() => handleRemove(id)}>{t('modals.removeModal.removeBtn')}</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveModal;
