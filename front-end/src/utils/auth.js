import { apiRequest } from "./api";
import { STORAGE_KEY } from "./config";

const getSession = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading session from localStorage:", error);
    return null;
  }
};

const saveSession = (session) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch (error) {
    console.error("Error saving session to localStorage:", error);
  }
};

const login = async (email, password) => {
  const { user, token } = await apiRequest("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  saveSession({ user, token });
  return user;
};

const logout = () => {
  localStorage.removeItem(STORAGE_KEY);
};

const getToken = () => {
  return getSession()?.token ?? null;
};

const getCurrentUser = () => {
  return getSession()?.user ?? null;
};

const isTokenExpired = (token) => {
  try {
    const { exp } = JSON.parse(atob(token.split(".")[1]));
    return !exp || Date.now() >= exp * 1000;
  } catch (error) {
    console.log(error);
    return true;
  }
};

const isAuthenticated = () => {
  const token = getToken();
  return Boolean(token) && !isTokenExpired(token);
};

const registerUser = async (email, password) => {
  const registeredUser = await apiRequest("/users", {
    method: "POST",
    body: JSON.stringify({ email: email, password: password }),
  });
  return registeredUser;
};

export {
  login,
  logout,
  getToken,
  getCurrentUser,
  isAuthenticated,
  registerUser,
};
