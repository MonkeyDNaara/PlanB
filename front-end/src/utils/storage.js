import { STORAGE_KEY } from "./config";

const getData = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : "";
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

const saveData = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

const isInStorage = (token) => {
  return getData().some((string) => string === token);
};

export { getData, saveData, isInStorage };
