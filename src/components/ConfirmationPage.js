// ConfirmationPage.js
import React from "react";
import { useSelector } from "react-redux";

const ConfirmationPage = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);

  return (
    <div>
      <h1>Your name {name} aged {age} has been added to student system.</h1>
      <p>You may now exit.</p>
    </div>
  );
};

export default ConfirmationPage;
