import { useEffect, useRef } from 'react';
import { Image, Form, Button } from 'react-bootstrap';

const MessagesInput = ({ formik, t }) => {
  const inputField = useRef();
  useEffect(() => {
    inputField.current.focus();
  });
  return (
    <div className="mt-auto px-5 py-3">
      <Form onSubmit={formik.handleSubmit} noValidate="" className="py-1 border rounded-2">
        <div className="input-group has-validation">
          <Form.Control
            autoComplete="off"
            ref={inputField}
            onChange={formik.handleChange}
            name="message"
            aria-label="Новое сообщение"
            placeholder={t('messagesPage.inputPlaceholder')}
            className="border-0 p-0 ps-2 form-control"
            value={formik.values.message}
          />
          <Button variant="" type="submit" disabled="" className="btn btn-group-vertical">
            <Image src="sendMessage.svg" />
            <span className="visually-hidden">{t('messagesPage.sendBtn')}</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default MessagesInput;
