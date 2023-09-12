import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import filter from 'leo-profanity';
import { selectors as messagesSelectors } from '../../slices/messagesSlice';
import { selectors as channelsSelectors } from '../../slices/channelsSlice';
import useSocket from '../../hooks/SocketHook';
import useAuth from '../../hooks/AuthHook';
import MessagesHeader from './MessagesHeader';
import MessagesBox from './MessagesBox';
import MessagesInput from './MessagesInput';
import toastConfig from '../../toastConfig';

const Messages = () => {
  const { t } = useTranslation();
  const username = useAuth().getUserName();
  const { activeChannelId } = useSelector((state) => state.channels);
  const activeChannel = useSelector(
    (state) => channelsSelectors.selectById(state, activeChannelId),
  );
  const activeChannelName = activeChannel ? activeChannel.name : '';
  const messages = useSelector(messagesSelectors.selectAll)
    .filter((m) => m.channelId === activeChannelId);
  const socket = useSocket();
  const callback = (formik) => formik.resetForm();
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values) => {
      try {
        if (values.message.length === 0) {
          throw new Error(t('messagesPage.error'));
        }
        socket.addMessage(
          filter.clean(values.message),
          activeChannelId,
          username,
          () => callback(formik),
        );
      } catch (err) {
        toast.error(err.message, toastConfig);
      }
    },
  });
  return (
    <RenderMessages
      messages={messages}
      activeChannelName={activeChannelName}
      formik={formik}
    />
  );
};

const RenderMessages = ({
  messages, activeChannelName, formik,
}) => {
  const { t } = useTranslation();
  return (
    <Col className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <MessagesHeader messages={messages} t={t} activeChannelName={activeChannelName} />
        <MessagesBox messages={messages} />
        <MessagesInput formik={formik} t={t} />
      </div>
    </Col>
  );
};

export default Messages;
