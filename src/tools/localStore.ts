
import { useState, useEffect, useCallback } from "react";

function useChromeStorageLocal<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(defaultValue);

  // Load the value from storage when the component mounts
  useEffect(() => {
    chrome.storage.local.get(key, (result) => {
      if (result[key] !== undefined) {
        setValue(result[key]);
      }
    });

    const handleChange = (changes: { [key: string]: chrome.storage.StorageChange }) => {
      if (changes[key]) {
        setValue(changes[key].newValue);
      }
    };

    chrome.storage.onChanged.addListener(handleChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleChange);
    };
  }, [key]);

  // Function to update storage
  const setStoredValue = useCallback(
    (newValue: T) => {
      chrome.storage.local.set({ [key]: newValue }, () => {
        setValue(newValue);
      });
    },
    [key]
  );

  return [value, setStoredValue] as const;
}

export default useChromeStorageLocal;
