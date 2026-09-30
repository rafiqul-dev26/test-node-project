const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "../data/users.json");

const readUsers = () => {
  const data = fs.readFileSync(dataFile, "utf8");
  return JSON.parse(data);
};

const writeUsers = (users) => {
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2), "utf8");
};

const getAllUsers = () => {
  return readUsers();
};

const getUserById = (id) => {
  const users = readUsers();
  return users.find((user) => user.id === Number(id));
};

const createUser = (data) => {
  const users = readUsers();

  const newUser = {
    id: users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    name: data.name,
    email: data.email,
    age: data.age ?? null
  };

  users.push(newUser);
  writeUsers(users);

  return newUser;
};

const updateUser = (id, data) => {
  const users = readUsers();
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return null;
  }

  users[index] = {
    ...users[index],
    ...data,
    id: users[index].id
  };

  writeUsers(users);
  return users[index];
};

const deleteUser = (id) => {
  const users = readUsers();
  const index = users.findIndex((user) => user.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedUser = users.splice(index, 1)[0];
  writeUsers(users);

  return deletedUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
