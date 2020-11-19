const addItem = (itemName, listId) => {
  return {
    type: "ADD_ITEM",
    payload: { itemName, listId },
  };
};

const deleteItem = (itemId, listId) => {
  return {
    type: "DELETE_ITEM",
    payload: { itemId, listId },
  };
};

const boughtItem = (itemId, listId) => {
  return {
    type: "BOUGHT_ITEM",
    payload: { itemId, listId },
  };
};

const addList = (listname) => {
  return {
    type: "ADD_LIST",
    payload: listname,
  };
};

const removeList = (listId) => {
  return {
    type: "REMOVE_LIST",
    payload: listId,
  };
};

const actions = { addItem, deleteItem, boughtItem, addList, removeList };
export default actions;
