import React from "react";
import MessagePreview from "./MessagePreview";


function Requirements({ requirements }) {
  return (
    <div className="requirements">
      <div className="container">
        <h2>Requirements</h2>

        <MessagePreview text={requirements}></MessagePreview>
      </div>
    </div>
  );
}

export default Requirements;
