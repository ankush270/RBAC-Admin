import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../common/Modal';
import RoleForm from './RoleForm';
import { useStore } from '../../data/store';

export default function RoleModal({ isOpen, onClose, role }) {
  const { addRole, updateRole } = useStore();

  const handleSubmit = (formData) => {
    if (role) {
      updateRole({ ...formData, id: role.id });
    } else {
      addRole(formData);
    }
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={role ? 'Edit Role' : 'Create Role'}
    >
      <RoleForm
        role={role}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  );
}

RoleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  role: PropTypes.object,
};