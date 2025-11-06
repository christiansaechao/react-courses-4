export function EmployeeCard({ people }) {
  return (
    <>
      {people
        .filter((person) => person.age > 21)
        .map((element) => {
          return (
            <>
              <p>{element.name}</p>
              <p>{element.title}</p>
            </>
          );
        })}
    </>
  );
};
