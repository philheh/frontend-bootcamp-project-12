import { Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '../../slices/modalSlice';

const ChannelsHeader = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const showModal = (type, id = null) => dispatch(modalActions.showModal({ type, id }));

  return (
    <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
      <b>{t('channelsPage.channelsTitle')}</b>
      <Button variant="" onClick={() => showModal('add')} className="text-primary p-0 btn btn-group-vertical">
        <Image src="plus-square.svg" alt="add channel" className="btn-primary" />
        <span className="visually-hidden">+</span>
      </Button>
    </div>
  );
};

export default ChannelsHeader;
