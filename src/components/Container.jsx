import React, { useState } from "react";
import UserInput from "./UserInput";
import DataList from "./DataList";
function Container(params) {
  const [persons, setPersons] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [currperson, setCurrperson] = useState([
    ["Name", ""],
    ["Age", ""],
    ["Designation", ""],
    ["Place", ""],
  ]);

  const AddPerson = (currperson) => {
    if (isEditing) {
      const updatedPersons = persons.map((person, index) =>
        index === editIndex ? currperson : person
      );
      setPersons(updatedPersons);
      setIsEditing(false);
      setEditIndex(null);
      setCurrperson([
        ["Name", " "],
        ["Age", " "],
        ["Designation", " "],
        ["Place", " "],
      ]);
    } else {
      const hasEmptyField = currperson.some(
        ([key, value]) => value.trim() === ""
      );
      if (!hasEmptyField) {
        const newpersonval = [...persons, currperson];

        setPersons(newpersonval);
        setCurrperson([
          ["Name", " "],
          ["Age", " "],
          ["Designation", " "],
          ["Place", " "],
        ]);
      }
    }
  };

  const EditPerson = (index) => {
    const editedvalue = persons[index];
    setCurrperson(editedvalue);
    setIsEditing(true);
    setEditIndex(index);
  };

  const DeletePerson = (index) => {
    const newPersons = persons.filter((person, itemIndex) => {
      return itemIndex !== index;
    });
    setPersons(newPersons);
  };
  return (
    <>
      <UserInput
        currperson={currperson}
        AddPerson={AddPerson}
        setCurrperson={setCurrperson}
      />
      <DataList
        persons={persons}
        EditPerson={EditPerson}
        DeletePerson={DeletePerson}
      />
    </>
  );
}

export default Container;
