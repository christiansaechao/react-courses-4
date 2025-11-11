import React from "react";
import { SectionOne } from "../components/doordash/section-1";
import { ThreeCards } from "../components/doordash/three-cards";
import { TwoBigCards } from "../components/doordash/two-big-cards";

export const HomePage = () => {
  return (
    <div>
      <SectionOne />
      <ThreeCards />
      <TwoBigCards />
    </div>
  );
};
