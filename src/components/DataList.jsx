import DataCard from "./DataCard";
import "./DataList.css";

function DataList({ persons, EditPerson, DeletePerson }) {
  return (
    <>
      <ul className="main">
        {persons.map((item, itemIndex) => {
          return (
            <DataCard
              item={item}
              itemIndex={itemIndex}
              EditPerson={EditPerson}
              DeletePerson={DeletePerson}
            />
          );
        })}
      </ul>
    </>
  );
}
export default DataList;
