import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


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
                    setItem(parsedItems);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);
    },[]);


    const saveItem = (newItem) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
        setItem(newItem);
    }
    return { item, saveItem, loading, error };
}
export { useLocalStorage };