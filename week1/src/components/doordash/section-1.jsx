import React from "react";
import { GeneralButton } from "../button";

export const SectionOne = () => {
  return (
    <div>
      <GeneralButton text={"Login"} additionalStyles={"uppercase"} />
      <GeneralButton text={"Open App"} />
      <div>
        <h1>$0 DELIVERY FEE ON FIRST ORDER Other fees apply</h1>
        <input placeholder="Enter delivery address" />
        <div className="flex gap-2 items-center justify-center">
          <GeneralButton text={"Login"} />
          <GeneralButton text={"Use Current Location"} />
        </div>
      </div>
    </div>
  );
};
