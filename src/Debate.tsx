import * as React from "react";

export const Debate = ({ debate }) => (
  <div>
    {debate.map(message => (
      <div className="message">
        <div>
          <strong>{message.author}</strong>
        </div>
        {message.text}
      </div>
    ))}
  </div>
);
