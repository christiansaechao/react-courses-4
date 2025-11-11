import React from "react";

export const GeneralButton = ({ text, additionalStyles }) => {
  return (
    <button className={`bg-red-500 p-2 rounded-full ${additionalStyles}`}>
      {text}
    </button>
  );
};
