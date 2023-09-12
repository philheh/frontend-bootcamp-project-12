import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions as modalActions } from '../../slices/modalSlice';
import { actions as channelsActions } from '../../slices/channelsSlice';

export const UnRemovableBtn = ({ name, id, variant }) => {
  const dispatch = useDispatch();
  const setActiveChannelId = (channelId) => dispatch(channelsActions.setActiveChannelId(channelId));
  return (
    <Button
      type="button"
      variant={variant}
      onClick={() => setActiveChannelId(id)}
      className="text-truncate w-100 rounded-0 text-start"
    >
      <span className="me-1">#</span>
      {name}
    </Button>
  );
};

export const RemovableBtn = ({ name, id, variant }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const showModal = (payload) => dispatch(modalActions.showModal(payload));
  return (
    <Dropdown as={ButtonGroup} className="d-flex">
      <UnRemovableBtn name={name} variant={variant} id={id}>
        {name}
      </UnRemovableBtn>
      <Dropdown.Toggle
        variant={variant}
        className="flex-grow-0 dropdown-toggle dropdown-toggle-split"
        id="dropdown-basic"
      >
        <span className="visually-hidden">{t('channelsPage.dropDown.controlLabel')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="rounded-0">
        <Dropdown.Item onClick={() => showModal({ type: 'remove', id })}>{t('channelsPage.dropDown.delete')}</Dropdown.Item>
        <Dropdown.Item onClick={() => showModal({ type: 'rename', id })}>{t('channelsPage.dropDown.rename')}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
