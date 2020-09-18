import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Modal } from 'semantic-ui-react';

export const ModalFrame: React.FC<any> = ({
  open,
  setOpen,
  modalContent,
  modalHeader,
  modalActions,
  content,
}): JSX.Element => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>{modalHeader()}</Modal.Header>
      <Modal.Content>{modalContent(content)}</Modal.Content>
      <Modal.Actions>{modalActions()}</Modal.Actions>
    </Modal>
  );
};
