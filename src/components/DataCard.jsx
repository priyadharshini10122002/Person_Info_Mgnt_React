import "./DataCard.css";

function DataCard({ item, itemIndex, EditPerson, DeletePerson }) {
  return (
    <>
      {console.log(item)}
      {item.map((element, index) => {
        return (
          <li className="DataItem" key={index}>
            {element[0]} : {element[1]}
          </li>
        );
      })}

      <div className="ButtonContainer">
        <button
          className="EditButton"
          onClick={() => {
            EditPerson(itemIndex);
          }}
        >
          Edit Info
        </button>
        <button
          className="DeleteButton"
          onClick={() => {
            DeletePerson(itemIndex);
          }}
        >
          Delete Info
        </button>
      </div>
    </>
  );
}
export default DataCard;
