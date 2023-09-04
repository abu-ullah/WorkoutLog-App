import React, {useState} from "react";

function Log(props) {

  const [isMouseOver, setMouseOver] = useState(false)
  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  return (
      <div className="log">
          <h1>{props.name}</h1>
          <p>{props.last_updated}</p>
          <i class="fa-solid fa-trash log-icons"></i>
          <i class="fa-solid fa-pen-to-square log-icons"
            style={{ color: isMouseOver ? "red" : "black",
                     fontSize: isMouseOver ? "25px" : null
                  }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          ></i>
      </div>
  );
}

export default Log;
