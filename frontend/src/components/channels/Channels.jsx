import React from 'react';
import {
  Col, Nav,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectors } from '../../slices/channelsSlice';
import ChannelsHeader from './ChannelsHeader';
import { UnRemovableBtn, RemovableBtn } from './ChannelsButtons';
import ModalComponent from '../modals/ModalComponent';

const Channels = () => {
  const channels = useSelector(selectors.selectAll);
  const { activeChannelId } = useSelector((state) => state.channels);
  return (
    <Col className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <ChannelsHeader />
      <Nav as="ul" fill className="flex-column nav-pills px-2 mb-3 overflow-auto h-100 d-block" id="channels-box">
        {channels.map(({ id, name, removable }) => {
          const variant = (id === activeChannelId) ? 'secondary' : null;
          return (
            <Nav.Item as="li" key={id} className="w-100">
              {!removable
                ? (
                  <UnRemovableBtn
                    name={name}
                    id={id}
                    variant={variant}
                  />
                )
                : (
                  <RemovableBtn
                    name={name}
                    id={id}
                    variant={variant}
                  />
                )}
            </Nav.Item>
          );
        })}
        <ModalComponent />
      </Nav>
    </Col>
  );
};

export default Channels;
