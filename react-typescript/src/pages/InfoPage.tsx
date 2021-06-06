import React from "react";
import { useHistory } from "react-router-dom";

export const InfoPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h2>Information page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur
        fugiat expedita eveniet ad. Cumque veritatis iusto aperiam libero, minus
        magni excepturi quaerat architecto dicta cupiditate natus qui et sunt?
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to TodoList
      </button>
    </>
  );
};
