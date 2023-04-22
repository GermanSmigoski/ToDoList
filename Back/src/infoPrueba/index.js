const faker = require("faker");

const users = [];
const lists = [];

for (let i = 0; i < 3; i++) {
  const user = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    password: faker.internet.password(),
    dateOfBirth: faker.date.past().toISOString(),
    image: faker.image.avatar(),
    email: faker.internet.email(),
    status: faker.random.boolean() ? "active" : "inactive",
    gender: faker.random.arrayElement(["male", "female", "other"]),
  };
  users.push(user);
}

for (let i = 0; i < 3; i++) {
  const list = {
    title: faker.lorem.words(),
    content: faker.lorem.sentences(),
    date: faker.date.future(),
  };
  lists.push(list);
}

module.exports = {
  users,
  lists,
};
