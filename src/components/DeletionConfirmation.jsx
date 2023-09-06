import React from 'react';

function DeletionConfirmation({ onConfirm, onCancel }) {
  return (
    <div className="deletion-confirmation-overlay">
      <div className="deletion-confirmation">
        <h5>Are you sure?</h5>
        <p>Click "Yes" to delete, or "No" to cancel.</p>
        <button onClick={onConfirm} className="btn btn-warning">Yes</button>
        <button onClick={onCancel} className="btn btn-light">No</button>
      </div>
    </div>
  );
}

export default DeletionConfirmation;
