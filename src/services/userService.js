import { storageService } from "./storageService";
import ShortUniqueId from "short-unique-id";

function generateId(length = 10) {
  const { randomUUID } = new ShortUniqueId();
  return randomUUID(length);
}
function createUser(username, email, password, avatar = "") {
  const newUser = {
    id: generateId(),
    username,
    password,
    email,
    avatar: `https://robohash.org/${username}`,
    isAdmin: false,
    createdAt: new Date(),
  };
  const users = storageService.getUsers();
  const foundedUser = users.find((user) => user.email === email);
  if (foundedUser) return false;
  const totalUsers = storageService.getUsers();
  storageService.saveUsers([...totalUsers, newUser]);
  return true;
}
function login(user) {
  const { username, password } = user;
  const users = storageService.getUsers();
  const foundedUser = users.find(
    (user) => user.password === password && user.username === username
  );
  const foundedUser2 = users.find((user) => user.username === username);
  if (!foundedUser2) {
    return null;
  } else if (!foundedUser) {
    return false;
  }
  storageService.saveLoggedInUser(foundedUser);
  return foundedUser;
}
function logout() {
  storageService.clearAll();
}

export const userService = {
  createUser,
  login,
  logout,
};
