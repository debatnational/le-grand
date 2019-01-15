import * as React from "react";

export const Debate = ({ debate }) => (
  <div>
    {debate.map((message, i) => (
      <div className="message" key={i}>
        <div>
          <strong>{message.author}</strong>
        </div>
        {message.text}
      </div>
    ))}
  </div>
);
