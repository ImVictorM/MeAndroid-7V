export const setToLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }

  return null;
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
