import AddModal from './add/AddModal';
import RemoveModal from './remove/RemoveModal';
import RenameModal from './rename/RenameModal';

const mappingModals = {
  add: AddModal,
  remove: RemoveModal,
  rename: RenameModal,
};

export default (type) => mappingModals[type];
