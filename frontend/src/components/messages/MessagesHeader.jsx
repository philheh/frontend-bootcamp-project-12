const MessagesHeader = ({ messages, t, activeChannelName }) => (
  <div className="bg-light mb-4 p-3 shadow-sm small">
    <p className="m-0">
      <b>
        #
        {' '}
        {activeChannelName}
      </b>
    </p>
    <span className="text-muted">{t('channelsPage.messagesCounter.messages', { count: messages.length })}</span>
  </div>
);

export default MessagesHeader;
