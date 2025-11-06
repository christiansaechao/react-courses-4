// props = { name: "Chris" }

export const User = (props) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        {props.name}
        <h1>{props.data.city}</h1>
      </div>

      <div>
        <h2></h2>
      </div>
    </>
  );
};
