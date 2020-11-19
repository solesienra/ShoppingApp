import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";

function SelectedList({ listSelectedId }) {
  const selectedList = useSelector((state) =>
    state.lists.find(
      (shoppingListitem) => listSelectedId === shoppingListitem.id
    )
  );
  const [itemName, setItemName] = React.useState("");
  const dispatch = useDispatch();
  console.log(selectedList);

  if (selectedList === undefined) {
    return null;
  }
  return (
    <div className="container">
      <div className="itemsBox">
        <div>
          {" "}
          <h2 className="mb-4">{selectedList.listname}</h2>{" "}
          <i
            className="fas fa-minus-circle"
            onClick={() => dispatch(actions.removeList(selectedList.id))}
          />
          <div>
            <input
              id="add"
              type="text"
              placeholder="Agregar item"
              className="inputAdd"
              onChange={(e) => setItemName(e.target.value)}
            />{" "}
            <i
              className="fas fa-plus addButton"
              onClick={() => {
                dispatch(actions.addItem(itemName, selectedList.id));
              }}
            ></i>
          </div>
          <ul className="mt-4 list-group">
            {selectedList.items.map((item) => {
              return (
                <li
                  onClick={() =>
                    dispatch(actions.boughtItem(item.id, selectedList.id))
                  }
                  className="list-group-item"
                  key={item.id}
                >
                  {item.bought ? (
                    <i className="far fa-check-square"></i>
                  ) : (
                    <i className="far fa-square"></i>
                  )}
                  <span
                    style={{
                      textDecoration: item.bought ? "line-through" : "none",
                    }}
                  >
                    {" "}
                    {item.name}
                  </span>{" "}
                  <i
                    className="fas fa-minus-circle"
                    onClick={() =>
                      dispatch(actions.deleteItem(item.id, selectedList.id))
                    }
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SelectedList;

/*   const selectedList = useSelector(
    (state) =>
      state.filter((shoppingListitem) => {
        return listSelectedId === shoppingListitem.id;
      })[0]
  ); */
