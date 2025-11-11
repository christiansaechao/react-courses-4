import React from "react";

export const ThreeCards = () => {
  const cardInfo = [
    {
      title: "Become a Dasher",
      description:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      linkText:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      imgSrc: "some.link",
    },
    {
      title: "Become a Dasher",
      description:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      linkText:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      imgSrc: "some.link",
    },
    {
      title: "Become a Dasher",
      description:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      linkText:
        "As a delivery driver, make money and work on your schedule. Sign up in minutes.",
      imgSrc: "some.link",
    },
  ];

  return (
    <div>
      {cardInfo.map((card) => {
        return <CardComponent {...card} title={title} />;
      })}
    </div>
  );
};


const CardComponent = (props, { description, imgSrc, linkText }) => {
  return (
    <div>
      <img src={imgSrc} />
      <h1>{props.title}</h1>
      <p>{description}</p>
      <a href={linkText}>{linkText}</a>
    </div>
  );
};
