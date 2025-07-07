export default function ListItem({ name, onEdit, onDelete }) {
  //
  return (
    <div className="item">
      <h5>{name}</h5>

      <div className="todo-btn">
        <i className=" fa fa-solid fa-edit add-btn" onClick={()=>{onEdit()}} ></i>
        <i className=" fa fa-solid fa-trash add-btn" onClick={()=>{onDelete()}}></i>
      </div>
    </div>
  );
}

// const { inputData, setinputData, items, setItems, toggleSubmit, settoggleSubmit, IsEditItem, setIsEditItem } = props;

//  const Additems = () => {
//     if (!inputData) {
//       alert("fill the data");
//     } else if (inputData && toggleSubmit) {
//       setItems(
//         items.map((curEle) => {
//           if (curEle.id === IsEditItem) {
//             return { ...curEle, name: inputData };
//           }
//           return curEle;
//         })
//       );
//       setinputData("");
//       setIsEditItem("");
//       settoggleSubmit(false);
//     } else {
//       const newinputData = {
//         id: new Date().getTime().toString(),
//         name: inputData,
//       };
//       setItems([...items, newinputData]);
//       setinputData("");
//     }
//   };

//      //delete the item

//   const deleteItem = (index) => {
//     const updatedItems = items.filter((curEle) => {
//       return curEle.id !== index;
//     });
//     setItems(updatedItems);
//   };
//   //edit item
//   const editItem = (index) => {
//     const item_todo = items.find((curEle) => {
//       return curEle.id === index;
//     });
//     setinputData(item_todo.name);
//     setIsEditItem(index);
//     settoggleSubmit(true);
//   };
