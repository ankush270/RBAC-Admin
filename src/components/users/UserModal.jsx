import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import UserForm from './UserForm';
import { useStore } from '../../data/store';

export default function UserModal({ isOpen, onClose, user }) {
  const { addUser, updateUser } = useStore();

  const handleSubmit = (formData) => {
    if (user) {
      updateUser({ ...formData, id: user.id });
    } else {
      addUser(formData);
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={user ? 'Edit User' : 'Create User'}
    >
      <UserForm
        user={user}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}

UserModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.object,
};