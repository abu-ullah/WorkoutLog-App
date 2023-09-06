import React, {useState} from "react";
import DeletionConfirmation from "./DeletionConfirmation";

function Log(props) {

  const [isMouseOver, setMouseOver] = useState(false)
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  function handleMouseOver() {
    setMouseOver(true)
  }
  function handleMouseOut() {
    setMouseOver(false)
  }

  function handleDeleteClick() {
    console.log('Delete clicked')
    setShowDeleteConfirmation(true);
  }

  function handleDeleteConfirmed() {
    // Handle the delete operation here
    // You can call an API or update your state to remove the item
    // After deleting, you can close the confirmation dialog
    setShowDeleteConfirmation(false);
  }

  function handleDeleteCancelled() {
    // Handle canceling the delete operation here
    setShowDeleteConfirmation(false);
  }

  return (
      <div className="log">
          <h1>{props.name}</h1>
          <p>{props.last_updated}</p>
          <i class="fa-solid fa-trash log-icons" onClick={handleDeleteClick}></i>
          <i class="fa-solid fa-pen-to-square log-icons"
            style={{ color: isMouseOver ? "red" : "black",
                     fontSize: isMouseOver ? "25px" : null
                  }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></i>

          {showDeleteConfirmation && (
            <DeletionConfirmation
              onConfirm={handleDeleteConfirmed}
              onCancel={handleDeleteCancelled}
            />
          )}
      </div>
  );
}

export default Log;
