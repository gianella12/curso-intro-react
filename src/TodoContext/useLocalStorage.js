import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState({ initialValue }),
  );
  const { error, loading, item } = state;

  //LLAMAR A LOS ACTIONS CREATORS
  const onError = (error) =>
    dispatch({ type: actionType.error, payload: error });

  const onSuccess = (parsedItems) =>
    dispatch({ type: actionType.success, payload: parsedItems });

  const onSave = (item) => 
    dispatch({ type: actionType.save, payload: item })

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItems)

      } catch (error) {
        onError(error);
      }
    }, 2000);
  }, []);

  const saveItem = (newItem) => {
    try {
      localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };
  return { item, saveItem, loading, error };
}
const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  item: initialValue,
});

const actionType = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
};

const reducerObject = (state, payload) => ({
  [actionType.error]: {
    ...state,
    error: true,
  },
  [actionType.success]: {
    ...state,
    error: false,
    loading: false,
    item: payload,
  },
   [actionType.save]: {
    ...state,
    item: payload,
  }
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
export { useLocalStorage };
