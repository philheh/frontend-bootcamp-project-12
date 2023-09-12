import React, { useEffect, useRef } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { selectors, selectors as channelsSelectors } from '../../../slices/channelsSlice';
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from '../../../toastConfig';
import getScheme from '../../../validationSchemes';
import useSocket from '../../../hooks/SocketHook';

const RenameModal = ({ show, closeModal, id }) => {
  const inputField = useRef();
  useEffect(() => {
    inputField.current.select();
  }, []);

  const { t } = useTranslation();
  const channelToRename = useSelector(selectors.selectAll).find((channel) => channel.id === id);
  const channelsNames = useSelector(channelsSelectors.selectAll).map((channel) => channel.name);
  const socket = useSocket();
  const callback = () => {
    toast.success(t('toast.renamed'), toastConfig);
    closeModal();
  };
  const formik = useFormik({
    initialValues: {
      channelName: channelToRename.name,
    },
    validationSchema: getScheme.modalsScheme(Yup, t, channelsNames),
    onSubmit: (values) => {
      try {
        if (values.channelName.length === 0) {
          throw new Error(t('modals.notToBeEmpty'));
        }
        socket.renameChannel(id, values.channelName, callback);
        formik.resetForm();
      } catch (err) {
        toast.error(err.message, toastConfig);
      }
    },
  });

  return (
    <Modal show={show} onHide={closeModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modals.renameModal.title')}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            ref={inputField}
            autoComplete="off"
            isInvalid={formik.errors.channelName}
            name="channelName"
            id="channelName"
            className="mb-2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channelName}
            type="text"
          />
          <Form.Label className="visually-hidden" htmlFor="channelName">{t('modals.renameModal.label')}</Form.Label>
          <Form.Control.Feedback type="invalid">{formik.errors.channelName}</Form.Control.Feedback>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={closeModal} className="me-2">{t('modals.renameModal.cancelBtn')}</Button>
            <Button type="submit" variant="primary" onClick={formik.handleSubmit}>{t('modals.renameModal.renameBtn')}</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameModal;
