import "./UserInput.css";

function UserInput({ currperson, setCurrperson, AddPerson }) {
  const submitInfo = (currperson) => {
    AddPerson(currperson);
    console.log("AddPerson Called");
  };

  const handleChange = (fieldName, newvalue) => {
    setCurrperson((prev) =>
      prev.map(([key, value]) =>
        key === fieldName ? [key, newvalue] : [key, value]
      )
    );
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitInfo(currperson);
      }}
    >
      <h1>Enter Details </h1>

      {currperson.map(([key, value]) => (
        <div className="field-container" key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)} </label>
          <input
            id="key"
            name="key"
            type="text"
            value={value}
            onChange={(e) => handleChange(key, e.target.value)}
          />
          <br />
        </div>
      ))}
      <button type="submit">Submit Here</button>
    </form>
  );
}
export default UserInput;
