import React from "react";

export const TodoForm: React.FC = () => {
  return (
    <div className="input-field mt3">
      <input type="text" id="title" placeholder="Todo title"></input>
      <label htmlFor="title" className="active">
        Enter todo title
      </label>
    </div>
  );
};
