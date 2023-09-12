import React, { useMemo } from 'react';
import { io } from 'socket.io-client';
import { useDispatch, useSelector } from 'react-redux';
import SocketContext from '../contexts/SocketContext';
import { actions as channelsActions } from '../slices/channelsSlice';
import { selectors as messagesSelectors, actions as messagesActions } from '../slices/messagesSlice';

const socket = io();

export const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  const messages = useSelector(messagesSelectors.selectAll);

  socket.on('newChannel', (payload) => {
    dispatch(channelsActions.addChannel(payload));
  });

  socket.on('removeChannel', (payload) => {
    const { id } = payload;
    const messagesOfRemovedChannel = messages
      .filter((message) => message.channelId === id)
      .map((message) => message.id);
    dispatch(messagesActions.removeMessages(messagesOfRemovedChannel));
    dispatch(channelsActions.removeChannel(id));
  });

  socket.on('newMessage', (payload) => {
    dispatch(messagesActions.addMessage(payload));
  });

  socket.on('renameChannel', (payload) => {
    const { id, name } = payload;
    dispatch(channelsActions.updateChannel({ id, changes: { name } }));
  });

  const addChannel = (name, callback) => {
    socket.emit('newChannel', { name }, (response) => {
      if (response.status === 'ok') {
        callback(response.data.id);
      }
    });
  };

  const removeChannel = (id, callback) => {
    socket.emit('removeChannel', { id }, (response) => {
      if (response.status === 'ok') {
        callback();
      }
    });
  };

  const addMessage = (body, channelId, username, callback) => {
    socket.emit('newMessage', { body, channelId, username }, (response) => {
      if (response.status === 'ok') {
        callback();
      }
    });
  };

  const renameChannel = (id, name, callback) => {
    socket.emit('renameChannel', { id, name }, (response) => {
      if (response.status === 'ok') {
        callback();
      }
    });
  };

  const memo = useMemo(() => ({
    addChannel, removeChannel, addMessage, renameChannel,
  }));

  return (
    <SocketContext.Provider value={memo}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
