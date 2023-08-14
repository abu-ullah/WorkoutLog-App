import React from "react";

function Log(props) {
    return (
        <div className="log">
            <h1>{props.name}</h1>
            <p>{props.last_updated}</p>
        </div>
    );
}

export default Log;