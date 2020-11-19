const initial = {
  lists: [
    {
      listname: "Vegetales",
      id: 1,
      items: [{ name: "cebolla", id: 1, bought: false }],
      date: Date(),
    },
    {
      listname: "Limpieza",
      id: 2,
      items: [{ name: "escoba", id: 1, bought: false }],
      date: Date(),
    },
  ],
};

function shoppingReducer(state = initial, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        lists: state.lists.map((itemList) => {
          if (itemList.id === action.payload.listId) {
            return {
              ...itemList,
              items: [
                ...itemList.items.map((item) => {
                  return { ...item };
                }),
                {
                  name: action.payload.itemName,
                  id:
                    itemList.items.length === 0
                      ? 1
                      : itemList.items[itemList.items.length - 1].id + 1,
                  bought: false,
                },
              ],
            };
          } else {
            return {
              ...itemList,
              items: itemList.items.map((item) => {
                return { ...item };
              }),
            };
          }
        }),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        lists: state.lists.map((itemList) => {
          if (itemList.id === action.payload.listId) {
            return {
              ...itemList,
              items: [
                ...itemList.items.filter(
                  (item) => item.id !== action.payload.itemId
                ),
              ],
            };
          }
          return itemList;
        }),
      };

    case "BOUGHT_ITEM":
      return {
        ...state,
        lists: state.lists.map((itemList) => {
          if (itemList.id === action.payload.listId) {
            return {
              ...itemList,
              items: [
                ...itemList.items.map((item) =>
                  item.id === action.payload.itemId
                    ? { ...item, bought: !item.bought }
                    : item
                ),
              ],
            };
          }
          return itemList;
        }),
      };

    case "ADD_LIST":
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            listname: action.payload,
            id:
              state.lists.length === 0
                ? 1
                : state.lists[state.lists.length - 1].id + 1,
            items: [],
            date: Date(),
          },
        ],
      };
    /*  OTRA MANERA:  state.lists.push({
        listname: action.payload,
        id:
          state.lists.length === 0
            ? 1
            : state.lists[state.lists.length - 1].id + 1,
        items: [],
        date: Date(),
      });

      return JSON.parse(JSON.stringify(state));

 */

    case "REMOVE_LIST":
      return {
        ...state,
        lists: state.lists.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
export default shoppingReducer;

/* 
return state.map((list) =>
        list.name === action.payload.listName
          ? list.concat(
              list.items(
                list.items.concact({​​​​​ name: "banana", comprado: false }​​​​​)
              )
            )
          : list
      ); */
