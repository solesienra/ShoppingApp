import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../redux/actions";
import SelectedList from "./SelectedList";

function ShoppingLists() {
  const shoppingLists = useSelector((state) => state.lists);
  const dispatch = useDispatch();
  const [listName, setListName] = React.useState("");
  const [listSelectedId, setListSelectedId] = React.useState(1);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {" "}
          <div className="sectionBox">
            <h1 className="mb-5">Mis listas de compra</h1>
            {shoppingLists.map((shoppList) => {
              return (
                <div
                  key={shoppList.id}
                  className="productSectionBox mt-2"
                  onClick={() => setListSelectedId(shoppList.id)}
                >
                  <h2>{shoppList.listname}</h2>

                  <span>
                    {
                      shoppList.items.filter((item) => item.bought === true)
                        .length
                    }
                    /{shoppList.items.length}
                  </span>
                  <p>{shoppList.date}</p>
                </div>
              );
            })}
            <div>
              <input
                type="text"
                onChange={(e) => setListName(e.target.value)}
              />
              <i
                className="fas fa-plus "
                onClick={() => dispatch(actions.addList(listName))}
              ></i>
            </div>
          </div>
        </div>
        <div className="col">
          <SelectedList listSelectedId={listSelectedId} />
        </div>
      </div>
    </div>
  );
}
export default ShoppingLists;
